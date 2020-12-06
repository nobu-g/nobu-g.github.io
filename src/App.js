import React from 'react';
import ReactGA from 'react-ga';
import {Waypoint} from 'react-waypoint';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

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
      }} topOffset="65%" bottomOffset="10%" debug="true"/>
      <Portfolio data={config.portfolio}/>
      {config.main && <Footer data={config.main}/>}
    </div>
  );
}

export default App;
