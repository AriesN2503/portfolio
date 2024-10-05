import { useEffect, useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Contents from './components/Contents/Contents'

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
      <div className={`App ${theme}`}>
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <Contents currentTheme={theme} />
      </div>
    </>
  )
}

export default App
