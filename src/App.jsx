import { useEffect, useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Contents from './components/Contents/Contents'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark-theme')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'))
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <>
      <BrowserRouter>

        <div className={`App ${theme}`}>
          <Header toggleTheme={toggleTheme} currentTheme={theme} />
          <Routes>
            <Route path='/' element={<Contents currentTheme={theme} />} ></Route>
          </Routes>
          <Footer currentTheme={theme} />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
