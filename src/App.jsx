import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Players from './Components/Players/Players';

function App() {
  const [coin, setCoin] = useState(0);
  const [players, setPlayers] = useState([]);


  const handleCoinAdd = (amount) => {
    setCoin(coin + amount);
  };

  useEffect(() => {
    fetch('Players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])
  return (
    <>
      <Header coin={coin}></Header>
      <Hero handleCoinAdd={handleCoinAdd}></Hero>
      <Players players={players}></Players>
    </>
  )
}

export default App
