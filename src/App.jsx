import { useEffect} from 'react'
import './App.css'



function App() {

  const [role, setRole] = useEffect(null)

  const tg = window.Telegram.WebApp
  const data = {
    id: tg.initDataUnsafe?.user?.id,
    username:tg.initDataUnsafe?.user?.username
  }


  const fetchRole = async (data) => {
    try {
      const response = await fetch('https://clanner-server.onrender.com/web-data', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
      })
      if(!response.ok){
        throw new Error('Ошибка запроса роли')
      }
       const res = await response.json();
       setRole(res.role)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
  tg.ready()
  fetchRole(data)
},[])

const onClose = () => {
  tg.close()
}

if (role === 'notInClan') {
  return (
    <>
      <div>Форма для вступающих</div>
      <button onClick={onClose}>Закрыть</button>
    </>
  )
}
if (role === 'inClan') {
  return (
    <>
      <div>Шаблон для членов клана</div>
      <button onClick={onClose}>Закрыть</button>
    </>
  )
}
if (role === 'officerClan') {
  return (
    <>
      <div>Шаблон для офицеров</div>
      <button onClick={onClose}>Закрыть</button>
    </>
  )
}

return (
  <>
    Ошибка сервиса
    <button onClick={onClose}>Закрыть</button>
  </>
)

}

export default App
