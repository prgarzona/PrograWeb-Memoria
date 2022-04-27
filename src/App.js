import { useState } from 'react';
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
