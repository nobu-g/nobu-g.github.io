import Head from "next/head";
import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
// import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';

import resumeData from "./resumeData.json";

// const fetchConfig = async () => {
//   const response = await fetch('/resumeData.json');
//   return await response.json();
// }

export async function getStaticProps() {
  return {
    props: {
      resumeData,
    },
  };
}

const Home = ({ resumeData }) => {
  const config = resumeData;
  const [section, setSection] = React.useState("home");
  const [opaque, setOpaque] = React.useState(false);
  const sectionRef = React.useRef("home");
  const navTriggerRef = React.useRef(null);

  React.useEffect(() => {
    sectionRef.current = section;
  }, [section]);

  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const trigger = navTriggerRef.current;
    if (!trigger) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || entry.boundingClientRect.top > 0) {
        setOpaque(false);
        return;
      }
      setOpaque(true);
    });

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const sectionIds = ["home", "about", "resume", "portfolio"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    const activeEntries = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeEntries.set(entry.target.id, entry);
          } else {
            activeEntries.delete(entry.target.id);
          }
        });

        if (!activeEntries.size) {
          return;
        }

        const viewportCenter = window.innerHeight / 2;
        let nextSection = sectionRef.current;
        let closestDistance = Number.POSITIVE_INFINITY;

        activeEntries.forEach((entry, id) => {
          const entryCenter =
            entry.boundingClientRect.top + entry.boundingClientRect.height / 2;
          const distance = Math.abs(entryCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            nextSection = id;
          }
        });

        if (nextSection !== sectionRef.current) {
          sectionRef.current = nextSection;
          setSection(nextSection);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    for (const element of sections) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  return (
    // <div className={styles.container}>
    <div className="App">
      <Head>
        <title>Nobuhiro Ueda</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="This is the homepage of Nobuhiro Ueda. About his research and education."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header data={config.main} section={section} opaque={opaque} />
      <main>
        <div ref={navTriggerRef} aria-hidden="true" style={{ height: 1 }} />
        <About data={config.main} />
        <Resume data={config.resume} />
        <Portfolio data={config.portfolio} />
      </main>
      <Footer data={config.main} />
    </div>
  );
};

export default Home;
