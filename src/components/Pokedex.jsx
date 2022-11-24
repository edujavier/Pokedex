import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PokemonCards from './PokemonCards';


const Pokedex = () => {
  const userName = useSelector(state => state.name)
  const [pokemon, setPokemon] = useState([]);






  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
      //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154
      .then(res => setPokemon(res.data.results))
  }, [])
  //console.log(pokemon)
  const [page, setPage] = useState(1);
  const pokemonPerPage = 5;
  const lastIndex = page * pokemonPerPage;
  const firstIndex = lastIndex - pokemonPerPage;

  const pokemonPaginated = pokemon.slice(firstIndex, lastIndex);//para la paginacion pokeapp
  const totalPages = Math.ceil(pokemon.length / pokemonPerPage);

  const numbers = [];
  for (let i = 1; i <= totalPages; i++) {
    numbers.push(i);
  }
  console.log(numbers)
  return (
    <div >
      <h1>POKEDEX</h1>
      <p>Welcome {userName}!, here you can find your favorite pokemon</p>
      <input type="text" placeholder='Search pokemon'/>
      <button>Search</button>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev page
        </button>
        {numbers.map(number => (
          <button onClick={() => setPage(number)}>{number}</button>
        ))}
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next page</button>

      </div>


      {pokemonPaginated.map(poke => (
        <PokemonCards url={poke.url} />


      ))}
    </div>
  );
};

export default Pokedex;