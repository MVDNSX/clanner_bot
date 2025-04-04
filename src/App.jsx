
import { useEffect } from 'react'
import './App.css'
import FormEntry from './components/FormEntry/FormEntry'


function App() {
  
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.expand(); // Разворачиваем Mini App

    return () => tg.setBackgroundColor("");
  }, []);

return (
  <>
    <FormEntry />
  </>
)
}

export default App
