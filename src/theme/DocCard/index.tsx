import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client'
import { usePluralForm } from '@docusaurus/theme-common'
import isInternalUrl from '@docusaurus/isInternalUrl'
import { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react'

import type { Props } from '@theme/DocCard'
import Heading from '@theme/Heading'
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs'

import styles from './styles.module.css'

const CATEGORY_ICONS: Record<string, string> = {
  // Top-level sections
  Sweet: 'noto:candy',
  Pastry: 'noto:baguette-bread',
  Savoury: 'noto:pot-of-food',
  Cocktails: 'noto:cocktail-glass',
  // Sweet
  Biscuits: 'noto:cookie',
  'Gâteaux': 'noto:shortcake',
  'Pâtes': 'noto:flatbread',
  Tartes: 'noto:pie',
  Autres: 'noto:fork-and-knife-with-plate',
  // Pastry
  Bread: 'noto:bread',
  Enriched: 'noto:croissant',
  // Savoury
  'Fermented foods': 'noto:jar',
  Mushrooms: 'noto:mushroom',
  Soups: 'noto:steaming-bowl',
  Stocks: 'noto:shallow-pan-of-food',
  Turkish: 'noto:stuffed-flatbread',
  Indian: 'noto:curry-rice',
  Pasta: 'noto:spaghetti',
  Pies: 'noto:pie',
  Salts: 'noto:salt',
  Sauces: 'noto:honey-pot',
  Other: 'noto:fork-and-knife',
  // Cocktails
  Gin: 'noto:tropical-drink',
  Whiskey: 'noto:tumbler-glass',
}

function useCategoryItemsPlural() {
  const { selectMessage } = usePluralForm()
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        { count }
      )
    )
}

function CardContainer({
  href,
  children,
}: {
  href: string
  children: ReactNode
}): JSX.Element {
  return (
    <Link
      href={href}
      className={clsx('card padding--md', styles.cardContainer)}
    >
      {children}
    </Link>
  )
}

function CardLayout({
  href,
  icon,
  title,
  description,
}: {
  href: string
  icon: ReactNode
  title: string
  description?: string
}): JSX.Element {
  return (
    <CardContainer href={href}>
      <Heading
        as='h2'
        className={clsx('text--truncate', styles.cardTitle)}
        title={title}
      >
        {icon} {title}
      </Heading>
      {/* {description && (
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}
        >
          {description}
        </p>
      )} */}
    </CardContainer>
  )
}

function CategoryIcon({ label }: { label: string }): JSX.Element {
  const iconName = CATEGORY_ICONS[label]
  if (iconName) {
    return <Icon icon={iconName} className={styles.cardIcon} />
  }
  return <span className={styles.cardIcon}>🗃️</span>
}

function CardCategory({
  item,
}: {
  item: PropSidebarItemCategory
}): JSX.Element | null {
  const href = findFirstSidebarItemLink(item)
  const categoryItemsPlural = useCategoryItemsPlural()

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null
  }

  return (
    <CardLayout
      href={href}
      icon={<CategoryIcon label={item.label} />}
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  )
}

function CardLink({ item }: { item: PropSidebarItemLink }): JSX.Element {
  const icon = ''
  const doc = useDocById(item.docId ?? undefined)
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
    />
  )
}

export default function DocCard({ item }: Props): JSX.Element {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />
    case 'category':
      return <CardCategory item={item} />
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`)
  }
}
