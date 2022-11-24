import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';

const InputName = () => {
  const [pokeName, setPokeName] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enterName = () => {
    dispatch(changeName(pokeName));
    navigate('/pokedex')
  }
  return (
    <div>
      <div className="trainer">
        <h2>Hello trainer !</h2>
        <img src='https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png'></img>
        
      </div>
      Give me your name to start
      <input
        type="text" onChange={e => setPokeName(e.target.value)} value={pokeName} input />
      <button onClick={enterName}>enter</button>
    </div>
  );
};

export default InputName;