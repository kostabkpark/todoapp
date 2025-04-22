import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokelist, setPokelist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1300")
      .then(response => response.json())
      .then(res => {
        setIsLoading(false);
        //console.log(res.results);
        res.results.sort();
        return setPokelist(res.results)
      })
  }, [])
  //console.log(pokelist);
  return (
    <>
      <h1>Poketmons !</h1>
      {isLoading ? 
        <p>isLoading...</p> : 
        <select name="pokemon">
          <option>pokemon을 선택하세요</option>
          {
          pokelist.map((poke)=>{
            console.log(poke);
            return <option key={poke.name} value={poke.url}>{poke.name}</option>
          })}
        </select>
      }
    </>
  )
}

export default App
