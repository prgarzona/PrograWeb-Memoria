import { useState } from 'react';
import './App.css';

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

  //Pokecards aleatorias
  const revolverCartas = () => {
    const cartasRevueltas = [...pokeCards, ...pokeCards]
      .sort(() => Math.random() - 0.5)
      .map((carta) => ({...carta,id: Math.random()}))

      //se actualizan las cartas que se van a desplegar
      setCartas(cartasRevueltas)
      setTurnos(0)
  }

  console.log(cartas,turnos)

  return (
    <div className="App">
      <h1>Juego Memoria</h1>
      <button onClick={revolverCartas}>Nuevo Juego</button>
      
      <div className='card-grid'>
        {cartas.map(carta=>(
          <div className="carta"key={carta.id}>
            <div>
              <img className="front" src={carta.src} alt="Enfrente de carta" />
              <img className="back" src="/img/HideCard.jpeg" alt="Parte trasera"/>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
