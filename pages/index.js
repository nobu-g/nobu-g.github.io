import React from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head'
import Header from '../components/Header';
import {Waypoint} from 'react-waypoint';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
// import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';

import resumeData from './resumeData.json';

ReactGA.initialize('UA-110570651-1');

// const fetchConfig = async () => {
//   const response = await fetch('/resumeData.json');
//   return await response.json();
// }

export async function getStaticProps() {
  return {
    props: {
      resumeData
    }
  }
}

const Home = ({resumeData}) => {
  const config = resumeData;
  const [section, setSection] = React.useState("home");
  const [opaque, setOpaque] = React.useState(false);

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    // <div className={styles.container}>
    (<div className="App">
      <Head>
        <title>Nobuhiro Ueda</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="This is the homepage of Nobuhiro Ueda. About his research and education."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header data={config.main} section={section} opaque={opaque}/>
      <main>
        <Waypoint onEnter={({previousPosition}) => {
          if (previousPosition === Waypoint.above) {
            setSection("home");
          }
          if (previousPosition === Waypoint.below) {
            setSection("about");
          }
        }} topOffset="40%" bottomOffset="40%"/>
        <Waypoint
          onEnter={({previousPosition}) => {
            setOpaque(false);
          }}
          onLeave={({previousPosition}) => {
            setOpaque(true);
          }}
        />
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
      </main>
      <Footer data={config.main}/>
    </div>)
  );
};

export default Home;
