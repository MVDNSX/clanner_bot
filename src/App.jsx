
import { useEffect } from 'react'
import './App.css'
import FormEntry from './components/FormEntry/FormEntry'



function App() {
  
  useEffect(()=>{
    const tg = window.Telegram?.WebApp
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
