import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import Head from '@docusaurus/Head'

const shortcuts_bread = {
  title: 'Bread',
  links: [
    {
      id: 'docs/pastry/bread/baguettes',
      title: 'Baguettes',
    },
    {
      id: 'docs/pastry/enriched/kanelsnurrer',
      title: 'Kanelsnurrer',
    },
    {
      id: 'docs/pastry/bread/pain',
      title: 'Pain au levain',
    },
    {
      id: 'docs/pastry/enriched/brioche-suisse',
      title: 'Brioche suisse',
    },
    {
      id: 'docs/pastry/enriched/brioche',
      title: 'Brioche',
    },
    {
      id: 'docs/pastry/enriched/brioche-feuilletee',
      title: 'Brioche feuilletée',
    },
    {
      id: 'docs/pastry/enriched/cinnamon-buns',
      title: 'Cinnamon buns',
    },
    {
      id: 'docs/pastry/enriched/croissant',
      title: 'Croissants',
    },
    {
      id: 'docs/pastry/bread/bagels',
      title: 'Bagels',
    },
  ],
}

const shortcuts_sweet = {
  title: 'Sweet',
  links: [
    {
      id: 'docs/sweet/biscuits/oatmeal-cookies',
      title: 'Oatmeal cookies',
    },
    {
      id: 'docs/sweet/tartes/tarte-regent',
      title: 'Tarte du regent',
    },
    {
      id: 'docs/sweet/tartes/tarte-fine-pommes',
      title: 'Tarte aux pommes fine',
    },
    {
      id: 'docs/sweet/tartes/tarte-supreme-choco',
      title: 'Tarte chocolat suprême',
    },
    {
      id: 'docs/sweet/biscuits/palets-bretons',
      title: 'Palets bretons',
    },
    {
      id: 'docs/sweet/biscuits/sables-diamant',
      title: 'Sablés diamant',
    },
    {
      id: 'docs/sweet/tartes/pate-feuilletee',
      title: 'Pâte feuilletée',
    },
    {
      id: 'docs/sweet/tartes/pate-sablee',
      title: 'Pâte sablée',
    },
    {
      id: 'docs/sweet/tartes/pate-sucree',
      title: 'Pâte sucrée',
    },
  ],
}

const shortcuts_savoury = {
  title: 'Savoury',
  links: [
    {
      id: 'docs/savoury/galettes',
      title: 'Galettes',
    },
    {
      id: 'docs/savoury/gougere',
      title: 'Gougère',
    },
    {
      id: 'docs/savoury/chicken-broccoli',
      title: 'Chicken and broccoli',
    },
    {
      id: 'docs/savoury/fermented/kimchi',
      title: 'Kimchi',
    },
    {
      id: 'docs/pastry/bread/pizza',
      title: 'Pizza',
    },
    {
      id: 'docs/savoury/quiche-lorraine',
      title: 'Quiche lorraine',
    },
    {
      id: 'docs/savoury/tarte-thon',
      title: 'Tarte au thon',
    },
  ],
}

const shortcuts_cocktails = {
  title: 'Cocktails',
  links: [
    {
      id: 'docs/cocktails/amaretto-sour',
      title: 'Amaretto sour',
    },
    {
      id: 'docs/cocktails/pisco-sour',
      title: 'Pisco sour',
    },
    {
      id: 'docs/cocktails/old-fashioned',
      title: 'Old fashioned',
    },
    {
      id: 'docs/cocktails/negroni',
      title: 'Negroni',
    },
    {
      id: 'docs/cocktails/whiskey-smash',
      title: 'Whiskey smash',
    },
    {
      id: 'docs/cocktails/gin-basil-smash',
      title: 'Gin basil smash',
    },
    {
      id: 'docs/cocktails/ginger-ale',
      title: 'Ginger ale',
    },
    {
      id: 'docs/cocktails/chicha-sour',
      title: 'Chicha sour',
    },
  ],
}

function Shortcuts({ contents }) {
  return (
    <div className={styles.shortcutBlock}>
      <React.Fragment>
        <h2>{contents.title}</h2>
        <div>
          <ul>
            {contents.links.map((link, index) => (
              <li key={index}>
                <Link to={useBaseUrl(link.id)}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout description=''>
      <header className={clsx('hero ', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl('docs/pastry/bread/baguettes')}
            >
              Bread
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl('docs/sweet/biscuits/chocolate-chip-cookies')}
            >
              Sweet
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl('docs/savoury/adjaruli')}
            >
              Savoury
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl('docs/cocktails/amaretto-sour')}
            >
              Cocktails
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.flex}>
          <Shortcuts contents={shortcuts_bread} />
          <Shortcuts contents={shortcuts_sweet} />
          <Shortcuts contents={shortcuts_savoury} />
          <Shortcuts contents={shortcuts_cocktails} />
        </div>
      </main>
    </Layout>
  )
}

export default Home
