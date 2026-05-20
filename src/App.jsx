import { useState, useRef, useEffect} from "react";
import './App.css'

function App() {

  // UseState
  const [count, setCount] = useState(0);
  const [countRender, setCountRender] = useState(0);
  
  // UseRef
  const prevCount = useRef(count); // Armazena o valor anterior de count

  // UseEffect
  useEffect(() => {
    // Se o count mudou em relação ao valor anterior, incrementa countRender
    if (prevCount.current !== count) {
      setCountRender(prev => prev + 1)
      prevCount.current = count;  // Atualiza o valor anterior
    }
  }, [count]);

  // Reset function
  const handleReset = () => {
    setCount(0);
    setCountRender(0);
    prevCount.current = 0; // Reseta o valor armazenado no useRef
  }

  return (
    <div>
      <h1>Contador Inteligente: {count}</h1>
      <p>Renderizações: {countRender}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>+</button>
      <button className="btn" onClick={() => setCount(count - 1)}>-</button>
      <button id="reset" onClick={handleReset}>Resetar</button>
    </div>
  );
}

export default App;