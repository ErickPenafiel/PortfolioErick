import { useLayoutEffect } from 'react'
import './App.css'
import { Home } from './Pages/Home'
import { Layout } from './Pages/Layout'
import { Skills } from './Pages/Skills'
import { Projects } from './Pages/Projects'
import { ContactMe } from './Pages/ContactMe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import globalEs from './translations/es/global.json'
import globalEn from './translations/en/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: navigator.language.split('-')[0],
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }
})

function App () {
  useLayoutEffect(() => {
    const loader = document.getElementById('loader')
    setTimeout(() => {
      loader.classList.add('loaded')
      setTimeout(() => {
        document.body.removeChild(loader)
      }, 300)
    }, 2000)
  }, [])

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='skills' element={<Skills />} />
              <Route path='projects' element={<Projects />} />
              <Route path='contact' element={<ContactMe />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </>
  )
}

export default App
