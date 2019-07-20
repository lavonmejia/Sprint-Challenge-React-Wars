import React from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";
import 'semantic-ui-css/semantic.min.css';

const CharacterCard = props => {
  const [characterInfo, setCharacterInfo] = useState({});

  axios.get(`https://swapi.co/api/people/${props.id}`)
  
  .then(response => {
    setCharacterInfo(response.data);
  });

  return (


    <div className='ui teal card'>
     <h2 class="Header"> {characterInfo.name} </h2>
      
      <p class="content"> Height: {characterInfo.height} </p>
      <p> Mass: {characterInfo.mass} </p>
      <p> Hair Color: {characterInfo.hair_color} </p>
      <p> Skin Color: {characterInfo.skin_color} </p>
      <p> Eye Color: {characterInfo.eye_color} </p>
      <p> Birth Year: {characterInfo.birth_year} </p>
      <p> Gender: {characterInfo.gender} </p>
      </div>
    
  );
};

export default CharacterCard;
