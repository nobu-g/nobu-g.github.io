import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import resumeData from './data/resumeData.json'
import type { Config } from './types'

function App() {
  const config = resumeData as Config
  const [section, setSection] = useState("home")
  const [opaque, setOpaque] = useState(false)
  const sectionRef = useRef("home")
  const navTriggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    sectionRef.current = section
  }, [section])

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return
    }

    const trigger = navTriggerRef.current
    if (!trigger) {
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || entry.boundingClientRect.top > 0) {
        setOpaque(false)
        return
      }
      setOpaque(true)
    })

    observer.observe(trigger)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return
    }

    const sectionIds = ["home", "about", "resume", "portfolio"]
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!sections.length) {
      return
    }

    const activeEntries = new Map<string, IntersectionObserverEntry>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeEntries.set(entry.target.id, entry)
          } else {
            activeEntries.delete(entry.target.id)
          }
        })

        if (!activeEntries.size) {
          return
        }

        const viewportCenter = window.innerHeight / 2
        let nextSection = sectionRef.current
        let closestDistance = Number.POSITIVE_INFINITY

        activeEntries.forEach((entry, id) => {
          const entryCenter =
            entry.boundingClientRect.top + entry.boundingClientRect.height / 2
          const distance = Math.abs(entryCenter - viewportCenter)

          if (distance < closestDistance) {
            closestDistance = distance
            nextSection = id
          }
        })

        if (nextSection !== sectionRef.current) {
          sectionRef.current = nextSection
          setSection(nextSection)
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sections.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

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
  )
}

export default App
