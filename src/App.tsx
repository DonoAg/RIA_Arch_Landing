import { useEffect, useState } from 'react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { AboutPage } from './pages/AboutPage'
import { FaqPage } from './pages/FaqPage'
import { OverviewPage } from './pages/OverviewPage'
import { WelcomePage } from './pages/WelcomePage'

function getCurrentPage() {
  if (window.location.hash === '#/overview') {
    return 'overview'
  }

  if (window.location.hash === '#/about') {
    return 'about'
  }

  if (window.location.hash === '#/faq') {
    return 'faq'
  }

  return 'home'
}

function App() {
  const [page, setPage] = useState(getCurrentPage)

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getCurrentPage()

      setPage(nextPage)
      requestAnimationFrame(() => {
        if (nextPage === 'overview' || nextPage === 'about' || nextPage === 'faq') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          return
        }

        const sectionId = window.location.hash.slice(1)
        if (sectionId) {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="text-charcoal">
      <SiteHeader />
      {page === 'overview' ? (
        <OverviewPage />
      ) : page === 'about' ? (
        <AboutPage />
      ) : page === 'faq' ? (
        <FaqPage />
      ) : (
        <WelcomePage />
      )}
      <SiteFooter />
    </div>
  )
}

export default App
