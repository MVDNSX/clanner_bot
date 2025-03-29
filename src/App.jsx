
import { useEffect } from 'react'
import './App.css'
import FormEntry from './components/FormEntry/FormEntry'



function App() {
  const tg = window.Telegram?.WebApp
  useEffect(()=>{
    tg.expand()
  }, [])

return (
  <>
  123
    {/*<FormEntry />*/}
  </>
)
}

export default App
