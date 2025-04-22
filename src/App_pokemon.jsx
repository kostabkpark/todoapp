import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokelist, setPokelist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1300")
      .then(response => response.json())
      .then(res => {
        setIsLoading(!isLoading);
        return setPokelist(res.results)
      })
  }, [])
   
  return (
    <>
      <h1>Poketmons !</h1>
      {isLoading ? 
        "isLoading..." : 
        <ul>
        {pokelist.map((pokemon, index)=>{
          return (
            <li key={index}>
              {pokemon.name} <br />
              {pokemon.url}
            </li>
          )
        })}
      </ul>
    }
    </>
  )
}

export default App
