import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCards = ({url}) => {
  const[pokemon, setPokemon]=useState({});

  useEffect (()=>{
axios .get(url)
.then(res => setPokemon(res.data))
  },[])
  console.log(pokemon)
  return (
    <Link to={`/pokedex/${pokemon.id}`}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.other.home.front_default} alt="" srcset="" />
   
      
      
    </Link>
  );
};

export default PokemonCards;<h1>Pokemon cards</h1>