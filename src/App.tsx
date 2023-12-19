import { FormEvent, useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'


interface InfoProps{
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {

const [gasolinaInput, setGasolinaInput] = useState()
const [alcoolInput, setAlcoolInput] = useState()
const [info, setInfo] = useState <InfoProps>()

function calcular(event: FormEvent) {
  event.preventDefault(); /* Para a pagina nao dar F5 automatico*/

  let calculo = (alcoolInput / gasolinaInput)
  if(calculo <= 0.7){
    setInfo({
      title: "Compensa usar alcool",
      gasolina: gasolinaInput,
      alcool: alcoolInput
    })
  }else{
    setInfo({
      title: "Compensa usar gasolina",
      gasolina: gasolinaInput,
      alcool: alcoolInput
    })
  }
}


  return (

      <div>
       <main className='container'>
        <img 
        className='logo'
        src={logoImg}
        alt='Logo da calculadora'
        />

        <h1>Qual a melhor opção?</h1>

        <form className='form' onSubmit={calcular}>
          <label>Alcool (preço por litro)</label>
          <input 
          className='input'
          type='number'
          placeholder='3,99'
          min='1'
          step='0.01'
          required
          value={alcoolInput}
          onChange={ (e) => setAlcoolInput(Number(e.target.value)) }
          />

          <label>Gasolina (preço por litro)</label>
          <input 
          className='input'
          type='number'
          placeholder='3,99'
          min='1'
          step='0.01'
          required
          value={gasolinaInput}
          onChange={ (e) => setGasolinaInput(Number(e.target.value)) }
          />

          <input className='button' type='submit' value="Calcular" />
        </form>

      {info && Object.keys(info).length > 0 && (
        <section className='result'>
        <h2 className='result-title'> {info.title} </h2>

        <span>Alcool {info.alcool} </span>
        <span>Gasolina {info.gasolina} </span>
      </section>
      )}

       </main>
      </div>
     
  )
}

export default App
