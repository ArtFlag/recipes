import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const shortcuts_bread = {
  title: "Bread",
  links: [
    {
      id: "docs/bread/pain",
      title: "Pain au levain",
    },
    {
      id: "docs/bread/brioche",
      title: "Brioche",
    },
    {
      id: "docs/bread/tangzhon-milk-bread",
      title: "Tangzhon milk bread",
    },
  ],
};

const shortcuts_sweet = {
  title: "Sweet",
  links: [
    {
      id: "docs/sweet/tarte-regent",
      title: "Tarte du regent",
    },
    {
      id: "docs/sweet/tarte-supreme-choco",
      title: "Tarte chocolat suprême",
    },
    {
      id: "docs/sweet/baklava-noix",
      title: "Baklava aux noix",
    },
  ],
};

const shortcuts_savoury = {
  title: "Savoury",
  links: [
    {
      id: "docs/savoury/galettes",
      title: "Galettes",
    },
    {
      id: "docs/bread/pizza",
      title: "Pizza",
    },
    {
      id: "docs/savoury/quiche-lorraine",
      title: "Quiche lorraine",
    },
    {
      id: "docs/savoury/tarte-thon",
      title: "Tarte au thon",
    },
  ],
};

const shortcuts_cocktails = {
  title: "Cocktails",
  links: [
    {
      id: "docs/cocktails/amaretto-sour",
      title: "Amaretto sour",
    },
    {
      id: "docs/cocktails/pisco-sour",
      title: "Pisco sour",
    },
  ],
};

function Shortcuts({contents}) {
  return (
    <div className="container shortcuts">
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
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl("docs/savoury/adjaruli")}
            >
              Savoury
            </Link>

            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl("docs/sweet/baklava-noix")}
            >
              Sweet
            </Link>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl("docs/bread/pain")}
            >
              Bread
            </Link>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl("docs/cocktails/amaretto-sour")}
            >
              Cocktails
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="flex">
          <Shortcuts contents={shortcuts_savoury} />
          <Shortcuts contents={shortcuts_sweet} />
          <Shortcuts contents={shortcuts_bread} />
          <Shortcuts contents={shortcuts_cocktails} />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
