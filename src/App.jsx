import { useLayoutEffect } from 'react'
import './App.css'
import { Home } from './Pages/Home'
import { Layout } from './Pages/Layout'
import { Skills } from './Pages/Skills'
import { Projects } from './Pages/Projects'
import { ContactMe } from './Pages/ContactMe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
    </>
  )
}

export default App
