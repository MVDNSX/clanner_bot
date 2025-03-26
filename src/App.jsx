import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  const tg = window.Telegram.WebApp
  useEffect(()=>{
  tg.ready()
  const data = {...tg.initDataUnsafe}
  fetch('http://localhost:5000/web-data', {
    method: 'POST',
    headers: {'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data)
  })
},[])

const onClose = () => {
  tg.close()
}

  return (
    <>
      work!!!
      <button onClick={onClose}>Закрыть!!</button>
      <span>{tg.initDataUnsafe?.user?.id}</span>
      <span>{tg.initDataUnsafe?.user?.username}</span>
    </>
  )
}

export default App
