import React from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import {Waypoint} from 'react-waypoint';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
// import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';

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
