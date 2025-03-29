
import { useEffect } from 'react'
import './App.css'
import FormEntry from './components/FormEntry/FormEntry'



function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.init();
      window.Telegram.WebApp.expand();
    }
  },[])

return (
  <div className='layout'>
    <FormEntry />
  </div>
)
}

export default App
