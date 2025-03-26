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
  
  //fetch('https://clanner-server.onrender.com/web-data', {
  //  method: 'POST',
  //  headers: {'Content-Type': 'application/json' 
  //  },
  //  body: JSON.stringify(data)
  //})
},[])

const onClose = () => {
  tg.close()
}

  return (
    <>
      work!!!
      <button onClick={onClose}>Закрыть!!</button>
      <div>{tg.initDataUnsafe?.user?.id}</div>
      <div>{tg.initDataUnsafe?.user?.username}</div>
      <div>{tg.initDataUnsafe?.query_id}</div>
    </>
  )
}

export default App
