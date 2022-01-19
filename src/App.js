import './App.css';
import React, {useState} from 'react';

function App() {


  //---------------------STATE VARIABLES--------------------------

  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = () => {

    // Vanilla JS Fetch - Prior ES7 syntax - Long Way
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => {
        return res.json()
      })
      .then(jsonRes => {
        console.log(jsonRes.results);
        setPokemon(jsonRes.results);
      })
      .catch(someErr => console.log(someErr))


    //NEW ES7 syntax - Short Way
    //let response = await fetch("http://www.example.com");

  }



  return (
    <div className="App">
      <h2>Pokemon</h2>

      <hr />

      <button onClick={fetchPokemon}>Fetch Pokemon</button>

      <hr />
      {/*JSON.stringify(pokemon)*/}

      <table>
        <thead>
          <tr>
            <th>Pokemon Name</th>
            <th>Pokemon URL</th>
          </tr>
        </thead>

        <tbody>
          {
            pokemon.map((poke, idx) => {
              return (
                <tr key={idx}>
                  <td>{poke.name}</td>
                  <td>{poke.url}</td>
                </tr>
              )
            })
          }  
        </tbody>
      </table>
    </div>
  );
}

export default App;
