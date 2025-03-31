const useKeyboardInfo = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const viewportHeight = window.visualViewport.height;
      const windowHeight = window.innerHeight;
      
      if (viewportHeight < windowHeight) {
        setIsKeyboardOpen(true);
        setKeyboardHeight(windowHeight - viewportHeight);
      } else {
        setIsKeyboardOpen(false);
        setKeyboardHeight(0);
      }
    };

    window.visualViewport.addEventListener("resize", handleResize);
    return () => window.visualViewport.removeEventListener("resize", handleResize);
  }, []);

  return { isKeyboardOpen, keyboardHeight };
};