import { useEffect, useState } from 'react';
import './App.css';
import CartaSeleccionada from './components/CartaSeleccionada';

const pokeCards = [
  { "src": "/img/004.png" },
  { "src": "/img/006.png" },
  { "src": "/img/009.png" },
  { "src": "/img/150.png" },
  { "src": "/img/249.png" },
]


function App() {
  const [cartas,setCartas]=useState([])
  const [turnos,setTurnos]=useState(0)
  const [selecionUno,setSeleccionUno]=useState(null)
  const [selecionDos,setSeleccionDos]=useState(null)

  //Pokecards aleatorias
  const revolverCartas = () => {
    const cartasRevueltas = [...pokeCards, ...pokeCards]
      .sort(() => Math.random() - 0.5)
      .map((carta) => ({...carta,id: Math.random()}))

      //se actualizan las cartas que se van a desplegar
      setCartas(cartasRevueltas)
      setTurnos(0)
  }

//Seleccionar una opcion
const handleChoice = (carta)=>{
  selecionUno ? setSeleccionDos(carta): setSeleccionUno(carta)

}
//Comparar si las dos imagenes son iguales
useEffect(()=>{
  if (selecionUno && selecionDos){
    //comparacion a traves de las direcciones para ver si son iguales
    if(selecionUno.src===selecionDos.src){
      console.log('Cartas coinciden')
      reiniciarTurno()
    }else{
      console.log('No son iguales')
      reiniciarTurno()
    }
  }

},[selecionUno,selecionDos])
//reinicio
const reiniciarTurno=()=>{
  setSeleccionUno(null)
  setSeleccionDos(null)
  setTurnos(prevTurnos=>prevTurnos +1)
}

  return (
    <div className="App">
      <h1>Juego Memoria</h1>
      <button onClick={revolverCartas}>Nuevo Juego</button>
      
      <div className='card-grid'>
        {cartas.map(carta=>(
         <CartaSeleccionada 
         key={carta.id} 
         carta={carta}
         handleChoice={handleChoice}
         />
        ))}
      </div>
    </div>
  );
}

export default App;
