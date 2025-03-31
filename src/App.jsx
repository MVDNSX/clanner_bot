
import { useEffect, useState } from 'react'
import './App.css'
import FormEntry from './components/FormEntry/FormEntry'


function App() {
  
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;
    tg.setBackgroundColor("#080812"); // Устанавливаем фон приложения (HEX)
    tg.expand(); // Разворачиваем Mini App
  }, []);

return (
  <>
    <FormEntry />
  </>
)
}

export default App
