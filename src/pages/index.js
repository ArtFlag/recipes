import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const shortcuts_bread = {
  title: 'Bread',
  links: [
    {
      id: '/recipes/pastry/bread/baguettes',
      title: 'Baguettes',
    },
    {
      id: '/recipes/pastry/enriched/kanelsnurrer',
      title: 'Kanelsnurrer',
    },
    {
      id: '/recipes/pastry/bread/pain',
      title: 'Pain au levain',
    },
    {
      id: '/recipes/pastry/enriched/brioche-suisse',
      title: 'Brioche suisse',
    },
    {
      id: '/recipes/pastry/enriched/brioche',
      title: 'Brioche',
    },
    {
      id: '/recipes/pastry/enriched/brioche-feuilletee',
      title: 'Brioche feuilletée',
    },
    {
      id: '/recipes/pastry/enriched/cinnamon-buns',
      title: 'Cinnamon buns',
    },
    {
      id: '/recipes/pastry/enriched/croissant',
      title: 'Croissants',
    },
    {
      id: '/recipes/pastry/bread/bagels',
      title: 'Bagels',
    },
  ],
}

const shortcuts_sweet = {
  title: 'Sweet',
  links: [
    {
      id: '/recipes/sweet/biscuits/oatmeal-cookies',
      title: 'Oatmeal cookies',
    },
    {
      id: '/recipes/sweet/biscuits/cantucci',
      title: 'Cantucci',
    },
    {
      id: '/recipes/sweet/tartes/tarte-regent',
      title: 'Tarte du regent',
    },
    {
      id: '/recipes/sweet/tartes/tarte-fine-pommes',
      title: 'Tarte aux pommes fine',
    },
    {
      id: '/recipes/sweet/tartes/tarte-supreme-choco',
      title: 'Tarte chocolat suprême',
    },
    {
      id: '/recipes/sweet/biscuits/palets-bretons',
      title: 'Palets bretons',
    },
    {
      id: '/recipes/sweet/biscuits/sables-diamant',
      title: 'Sablés diamant',
    },
    {
      id: '/recipes/sweet/pates/pate-feuilletee',
      title: 'Pâte feuilletée',
    },
    {
      id: '/recipes/sweet/pates/pate-sablee',
      title: 'Pâte sablée',
    },
    {
      id: '/recipes/sweet/pates/pate-sucree',
      title: 'Pâte sucrée',
    },
  ],
}

const shortcuts_savoury = {
  title: 'Savoury',
  links: [
    {
      id: '/recipes/savoury/other/galettes',
      title: 'Galettes',
    },
    {
      id: '/recipes/savoury/other/gougere',
      title: 'Gougère',
    },
    {
      id: '/recipes/savoury/other/frittata',
      title: 'Frittata',
    },
    {
      id: '/recipes/savoury/other/marinated-zucchini',
      title: 'Marinated zucchini',
    },
    {
      id: '/recipes/savoury/other/chicken-broccoli',
      title: 'Chicken and broccoli',
    },
    {
      id: '/recipes/savoury/fermented/kimchi',
      title: 'Kimchi',
    },
    {
      id: '/recipes/pastry/bread/pizza',
      title: 'Pizza',
    },
    {
      id: '/recipes/savoury/other/quiche-lorraine',
      title: 'Quiche lorraine',
    },
    {
      id: '/recipes/savoury/other/tarte-thon',
      title: 'Tarte au thon',
    },
  ],
}

const shortcuts_cocktails = {
  title: 'Cocktails',
  links: [
    {
      id: '/recipes/cocktails/other/amaretto-sour',
      title: 'Amaretto sour',
    },
    {
      id: '/recipes/cocktails/other/pisco-sour',
      title: 'Pisco sour',
    },
    {
      id: '/recipes/cocktails/whiskey/old-fashioned',
      title: 'Old fashioned',
    },
    {
      id: '/recipes/cocktails/gin/negroni',
      title: 'Negroni',
    },
    {
      id: '/recipes/cocktails/whiskey/whiskey-smash',
      title: 'Whiskey smash',
    },
    {
      id: '/recipes/cocktails/gin/gin-basil-smash',
      title: 'Gin basil smash',
    },
    {
      id: '/recipes/cocktails/other/ginger-ale',
      title: 'Ginger ale',
    },
    {
      id: '/recipes/cocktails/other/chicha-sour',
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
              to={useBaseUrl('/recipes/pastry/bread/baguettes')}
            >
              Bread
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl('/recipes/sweet/biscuits/chocolate-chip-cookies')}
            >
              Sweet
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl('/recipes/savoury/other/adjaruli')}
            >
              Savoury
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl('/recipes/cocktails/other/amaretto-sour')}
            >
              Cocktails
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.container}>
          <div className={styles.flex}>
            <Shortcuts contents={shortcuts_bread} />
            <Shortcuts contents={shortcuts_sweet} />
            <Shortcuts contents={shortcuts_savoury} />
            <Shortcuts contents={shortcuts_cocktails} />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
