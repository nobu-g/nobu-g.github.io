import React from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Header from '../Components/Header';
import {Waypoint} from 'react-waypoint';
import About from '../Components/About';
import Resume from '../Components/Resume';
import Portfolio from '../Components/Portfolio';
import Footer from '../Components/Footer';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';

ReactGA.initialize('UA-110570651-1');

const fetchConfig = async () => {
  const response = await fetch('/resumeData.json');
  return await response.json();
}


const App = () => {
  const [config, setConfig] = React.useState({});
  const [section, setSection] = React.useState("home");

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    fetchConfig()
      .then(r => setConfig(r));
  }, []);

  return (
    <div className="App">
      <Header data={config.main} section={section}/>
      <Waypoint onEnter={({previousPosition}) => {
        if (previousPosition === Waypoint.above) {
          setSection("home");
        }
        if (previousPosition === Waypoint.below) {
          setSection("about");
        }
      }} topOffset="40%" bottomOffset="40%"/>
      <About data={config.main}/>
      <Waypoint onEnter={({previousPosition}) => {
        if (previousPosition === Waypoint.above) {
          setSection("about");
        }
        if (previousPosition === Waypoint.below) {
          setSection("resume");
        }
      }} topOffset="40%" bottomOffset="50%"/>
      <Resume data={config.resume}/>
      <Waypoint onEnter={({previousPosition}) => {
        if (previousPosition === Waypoint.above) {
          setSection("resume");
        }
        if (previousPosition === Waypoint.below) {
          setSection("portfolio");
        }
      }} topOffset="65%" bottomOffset="10%"/>
      <Portfolio data={config.portfolio}/>
      <Footer data={config.main}/>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nobuhiro Ueda</title>
        <meta name="description" content="This is the homepage of Nobuhiro Ueda. About his research and education."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <App/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
        </a>
      </footer>
    </div>
  )
}
