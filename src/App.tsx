import { useEffect, useState } from 'react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { AboutPage } from './pages/AboutPage'
import { WelcomePage } from './pages/WelcomePage'

function getCurrentPage() {
  return window.location.hash === '#/about' ? 'about' : 'home'
}

function App() {
  const [page, setPage] = useState(getCurrentPage)

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getCurrentPage()

      setPage(nextPage)
      requestAnimationFrame(() => {
        if (nextPage === 'about') {
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
      {page === 'about' ? <AboutPage /> : <WelcomePage />}
      <SiteFooter />
    </div>
  )
}

export default App
