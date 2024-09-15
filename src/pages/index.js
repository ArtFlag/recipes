import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const shortcuts_bread = {
  title: 'Bread/Viennoiserie',
  links: [
    {
      id: 'pastry/bread/baguettes',
      title: 'Baguettes',
    },
    {
      id: 'pastry/enriched/croissant',
      title: 'Croissants',
    },
    {
      id: 'pastry/enriched/pains-aux-raisins',
      title: 'Pains aux raisins',
    },
    {
      id: 'pastry/enriched/kanelsnurrer',
      title: 'Kanelsnurrer',
    },
    {
      id: 'pastry/bread/pain',
      title: 'Pain au levain',
    },
    {
      id: 'pastry/bread/cornbread',
      title: 'Cornbread',
    },
    {
      id: 'pastry/enriched/brioche',
      title: 'Brioche',
    },
    {
      id: 'pastry/enriched/brioche-feuilletee',
      title: 'Brioche feuilletée',
    },
    {
      id: 'pastry/enriched/brioche-suisse',
      title: 'Brioche suisse',
    },
    {
      id: 'pastry/enriched/cinnamon-buns',
      title: 'Cinnamon buns',
    },
    {
      id: 'pastry/bread/bagels',
      title: 'Bagels',
    },
  ],
}

const shortcuts_sweet = {
  title: 'Sweet',
  links: [
    {
      id: 'sweet/biscuits/chocolate-chip-cookies',
      title: 'Chocolate chip cookies',
    },
    {
      id: 'sweet/biscuits/cantucci',
      title: 'Cantucci',
    },
    {
      id: 'sweet/autres/canneles',
      title: 'Cannelés',
    },
    {
      id: 'sweet/tartes/tarte-regent',
      title: 'Tarte du regent',
    },
    {
      id: 'sweet/tartes/tarte-fine-pommes',
      title: 'Tarte aux pommes fine',
    },
    {
      id: 'sweet/tartes/tarte-supreme-choco',
      title: 'Tarte chocolat suprême',
    },
    {
      id: 'sweet/biscuits/palets-bretons',
      title: 'Palets bretons',
    },
    {
      id: 'sweet/biscuits/sables-diamant',
      title: 'Sablés diamant',
    },
    {
      id: 'sweet/pates/pate-feuilletee',
      title: 'Pâte feuilletée',
    },
    {
      id: 'sweet/pates/pate-sablee',
      title: 'Pâte sablée',
    },
    {
      id: 'sweet/pates/pate-sucree',
      title: 'Pâte sucrée',
    },
  ],
}

const shortcuts_savoury = {
  title: 'Savoury',
  links: [
    {
      id: 'savoury/other/galettes',
      title: 'Galettes',
    },
    {
      id: 'savoury/other/gougere',
      title: 'Gougère',
    },
    {
      id: 'savoury/stocks/vegetable-stock',
      title: 'Vegetable stock',
    },
    {
      id: 'savoury/stocks/chicken-stock',
      title: 'Chicken stock',
    },
    {
      id: 'savoury/other/marinated-zucchini',
      title: 'Marinated zucchini',
    },
    {
      id: 'savoury/other/chicken-broccoli',
      title: 'Chicken and broccoli',
    },
    {
      id: 'savoury/fermented/kimchi',
      title: 'Kimchi',
    },
    {
      id: 'pastry/bread/pizza',
      title: 'Pizza',
    },
    {
      id: 'savoury/other/quiche-lorraine',
      title: 'Quiche lorraine',
    },
    {
      id: 'savoury/other/tarte-thon',
      title: 'Tarte au thon',
    },
  ],
}

const shortcuts_cocktails = {
  title: 'Cocktails',
  links: [
    {
      id: 'cocktails/other/amaretto-sour',
      title: 'Amaretto sour',
    },
    {
      id: 'cocktails/other/pisco-sour',
      title: 'Pisco sour',
    },
    {
      id: 'cocktails/whiskey/old-fashioned',
      title: 'Old fashioned',
    },
    {
      id: 'cocktails/gin/negroni',
      title: 'Negroni',
    },
    {
      id: 'cocktails/whiskey/whiskey-smash',
      title: 'Whiskey smash',
    },
    {
      id: 'cocktails/gin/gin-basil-smash',
      title: 'Gin basil smash',
    },
    {
      id: 'cocktails/other/ginger-ale',
      title: 'Ginger ale',
    },
    {
      id: 'cocktails/other/chicha-sour',
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
                <Link to={useBaseUrl('/recipes/' + link.id)}>{link.title}</Link>
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
