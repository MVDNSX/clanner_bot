import { useEffect} from 'react'
import './App.css'



function App() {

  const tg = window.Telegram.WebApp
  const data = {
    query_id: tg.initDataUnsafe?.query_id,
    id: tg.initDataUnsafe?.user?.id,
    username:tg.initDataUnsafe?.user?.username
  }
  useEffect(()=>{
  tg.ready()
  
  fetch('https://clanner-server.onrender.com/web-data', {
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
