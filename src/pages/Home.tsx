import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
// import Contact from '../components/Contact';
// import Testimonials from '../components/Testimonials';

import resumeData from "../data/resumeData.json";
import type { ResumeData } from "../types/resumeData";

const Home = () => {
  const config = resumeData as unknown as ResumeData;
  const [section, setSection] = React.useState("home");
  const [opaque, setOpaque] = React.useState(false);
  const sectionRef = React.useRef("home");
  const navTriggerRef = React.useRef<HTMLDivElement>(null);

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
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const activeEntries = new Map<string, IntersectionObserverEntry>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeEntries.set(entry.target.id, entry);
          } else {
            activeEntries.delete(entry.target.id);
          }
        }

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
    <div className="App">
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
