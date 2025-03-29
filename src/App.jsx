
import { useEffect } from 'react'
import './App.css'
import FormEntry from './components/FormEntry/FormEntry'



function App() {
  useEffect(() => {
    const initTelegramApp = () => {
      if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.init();
        window.Telegram.WebApp.expand();
      }
    };

    setTimeout(initTelegramApp, 500);

    return () => {
      if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.collapse();
      }
    };
  }, []);

return (
  <div className='layout'>
    <FormEntry />
  </div>
)
}

export default App
