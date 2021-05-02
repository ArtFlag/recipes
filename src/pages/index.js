import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const shortcuts_bread =[
  {
    id: "bread/pain",
    title: "Pain au levain",
  },
  {
    id: "bread/brioche",
    title: "Brioche",
  },
  {
    id: "bread/tangzhon-milk-bread",
    title: "Tangzhon milk bread"
  }
];

const shortcuts_sweet = [
  {
    id: "sweet/tarte-regent",
    title: "Tarte du regent",
  },
  {
    id: "sweet/tarte-supreme-choco",
    title: "Tarte chocolat suprême",
  },
  {
    id: "sweet/baklava-noix",
    title: "Baklava aux noix",
  },
];

const shortcuts_savoury = [
  {
    id: "savoury/galettes",
    title: "Galettes",
  },
  {
    id: "bread/pizza",
    title: "Pizza",
  },
  {
    id: "savoury/quiche-lorraine",
    title: "Quiche lorraine",
  },
  {
    id: "savoury/tarte-thon",
    title: "Tarte au thon",
  },
];

function Shortcuts({ type }) {
  return (
    <div className="container shortcuts">
      {type == "savoury" ? (
        <React.Fragment>
          <h2>Savoury</h2>
          <ul>
            {shortcuts_savoury.map((shortcut) =>
              <li><Link to={`docs/${shortcut.id}`}>{shortcut.title}</Link></li>
            )}
          </ul>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h2>Sweet</h2>
          <ul>
            {shortcuts_sweet.map((shortcut) =>
              <li><Link to={`docs/${shortcut.id}`}>{shortcut.title}</Link></li>
            )}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description=""
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>

            <Link
                className={clsx("button button--outline button--secondary button--lg", styles.getStarted, styles.button)}
                to={useBaseUrl("docs/bread/pain")}
              >
                Bread
            </Link>
            <Link
              className={clsx("button button--outline button--secondary button--lg", styles.getStarted, styles.button)}
              to={useBaseUrl("docs/savoury/adjaruli")}
            >
              Savoury
            </Link>

            <Link
              className={clsx("button button--outline button--secondary button--lg", styles.getStarted, styles.button)}
              to={useBaseUrl("docs/sweet/baklava-noix")}
            >
              Sweet
            </Link>
          </div>
        </div>
      </header>
      <main>
          <div class="flex">
          <Shortcuts type="savoury" />
          <Shortcuts type="sweet" />
          <Shortcuts type="bread" />
          </div>
      </main>
    </Layout>
  );
}

export default Home;
