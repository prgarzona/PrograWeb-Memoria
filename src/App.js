import './App.css';

const pokeCards = [
  { "src": "/img/004.png" },
  { "src": "/img/006.png" },
  { "src": "/img/009.png" },
  { "src": "/img/150.png" },
  { "src": "/img/249.png" },
]


function App() {

  //Pokecards aleatorias
  const revolverCartas = () => {
    const cartasAletorias = [...pokeCards, ...pokeCards]
      .sort(() => Math.random() - 0.5)
      .map((cartas) => ({...cartas,id: Math.random}))
  }

  return (
    <div className="App">
      <h1>Juego Memoria</h1>
      <button>Nuevo Juego</button>
    </div>
  );
}

export default App;
