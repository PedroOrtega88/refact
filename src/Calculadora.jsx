import { useState } from 'react'

function Calculadora() {
    const [numero1, setCountNumero1] = useState(0)
    const [numero2, setCountNumero2] = useState(1)
    const [resultado, setResult] = useState(0)
  
    const suma = () => {
      const sum = parseFloat(numero1) + parseFloat(numero2)
      setResult(sum)
    }
  
    const resta = () => {
      const rest = parseFloat(numero1) - parseFloat(numero2)
      setResult(rest)
    }
    const multiplicar = () => {
      const mult = parseFloat(numero1) * parseFloat(numero2)
      setResult(mult)
    }
  
    const dividir = () => {
      const div = parseFloat(numero1) / parseFloat(numero2)
      setResult(div)
    }
  
    return (
  
      <div className="Calculadora">
        <form >
          <input 
          type="number" 
          placeholder="Introduce numero 1"
          value={numero1} 
          onChange={(e) => setCountNumero1(e.target.value)}
          />
          <input 
          type="number" 
          placeholder="Introduce numero 2"
          value={numero2} 
          onChange={(e) => setCountNumero2(e.target.value)}
          />
          
          <br/>
          <button type="button" onClick={suma}>Sumar</button>
          <button type="button" onClick={resta}>Restar</button>
          <button type="button" onClick={multiplicar}>Multiplicar</button>
          <button type="button" onClick={dividir}>Dividir</button>
          </form>
        <p>RESULTADO =  {resultado}</p>
      </div>   
  )}
  
  export default Calculadora;