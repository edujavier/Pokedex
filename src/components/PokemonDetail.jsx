import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const[pokemons, setPokemons]=useState({});
const {id} =useParams();

  useEffect (()=>{
    axios .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => setPokemons(res.data))
  },[id])
console.log(pokemons)
  return (
    <div>
      <h1>Pokemon detail</h1>
      <h1>{pokemons.name}</h1>
      <img src={pokemons.sprites?.other.home.front_default} alt="" srcset="" />
      
    </div>
  );
};

export default PokemonDetail;