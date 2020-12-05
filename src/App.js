import React from 'react';
import ReactGA from 'react-ga';

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

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    fetchConfig()
      .then(r => setConfig(r));
  }, []);

    return (
      <div className="App">
        <Header data={config.main}/>
        {config.main && <About data={config.main}/>}
        {config.resume && <Resume data={config.resume}/>}
        {config.portfolio && <Portfolio data={config.portfolio}/>}
        {config.main && <Footer data={config.main}/>}
      </div>
    );
}

export default App;
