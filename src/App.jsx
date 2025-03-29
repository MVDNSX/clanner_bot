
import { useEffect } from 'react'
import './App.css'
import FormEntry from './components/FormEntry/FormEntry'



function App() {
  
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.expand();

    const updateHeight = () => {
      const keyboardHeight = tg.viewportStableHeight - tg.viewportHeight;
      document.documentElement.style.setProperty("--tg-height", `${tg.viewportHeight}px`);
      document.documentElement.style.setProperty("--keyboard-height", `${keyboardHeight}px`);
    };

    tg.onEvent("viewportChanged", updateHeight);
    updateHeight();

    return () => tg.offEvent("viewportChanged", updateHeight);
  }, []);

return (
  <>
    <FormEntry />
  </>
)
}

export default App
