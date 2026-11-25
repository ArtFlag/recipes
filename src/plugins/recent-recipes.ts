import { execFileSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import type { LoadContext, Plugin } from '@docusaurus/types'

export interface RecentRecipe {
  id: string
  title: string
  date: string
}

const RECIPE_DIRS = [
  'docs/pastry',
  'docs/sweet',
  'docs/savoury',
  'docs/cocktails',
]

const MAX_RECIPES = 6

function parseFrontmatterTitle(filePath: string): string | null {
  const content = fs.readFileSync(filePath, 'utf8')
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!fmMatch) {
    return null
  }
  const titleMatch = fmMatch[1].match(/^title:\s*(.+)$/m)
  if (!titleMatch) {
    return null
  }
  return titleMatch[1].trim().replace(/^["']|["']$/g, '')
}

function fallbackTitleFromId(id: string): string {
  const base = path.basename(id)
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase())
}

function getRecentRecipes(siteDir: string, limit: number): RecentRecipe[] {
  let output = ''
  try {
    output = execFileSync(
      'git',
      [
        'log',
        '--diff-filter=A',
        '--name-only',
        '--format=COMMIT:%cI',
        '--',
        ...RECIPE_DIRS,
      ],
      { cwd: siteDir, encoding: 'utf8' }
    )
  } catch {
    return []
  }

  const seen = new Set<string>()
  const recipes: RecentRecipe[] = []
  let currentDate = ''

  for (const rawLine of output.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line) {
      continue
    }
    if (line.startsWith('COMMIT:')) {
      currentDate = line.slice('COMMIT:'.length)
      continue
    }
    if (!/\.mdx?$/.test(line) || seen.has(line)) {
      continue
    }

    const fullPath = path.join(siteDir, line)
    if (!fs.existsSync(fullPath)) {
      continue
    }

    seen.add(line)
    const id = line.replace(/^docs\//, '').replace(/\.mdx?$/, '')
    const title = parseFrontmatterTitle(fullPath) ?? fallbackTitleFromId(id)

    recipes.push({
      id,
      title,
      date: currentDate,
    })

    if (recipes.length >= limit) {
      break
    }
  }

  return recipes
}

export default function recentRecipesPlugin(
  context: LoadContext
): Plugin<RecentRecipe[]> {
  return {
    name: 'recent-recipes',
    async loadContent() {
      return getRecentRecipes(context.siteDir, MAX_RECIPES)
    },
    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content)
    },
  }
}
