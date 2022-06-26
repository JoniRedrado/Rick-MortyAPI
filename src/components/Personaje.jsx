import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { singleCharacter } from "../functions/funciones";
import Header from "./Header";
import '../css/Personaje.css'

const Personaje = () => {
  
  const [character, setCharacter] = useState(null)

  const params = useParams()

  useEffect(()=>{
    singleCharacter(params.id, setCharacter)
  })

  return(
    <>
    <Header></Header>
      {character != null ? (
        <article className="p-container">
          <div className="p-card">
            <img src={character.image} alt="imagen"/>
            <div className="p-info">
              <h3 className="p-nombre">{character.name}</h3>
              <p className="p-">Especie: {character.species}</p>
              <p className={character.status === 'Alive' ? 'alive' : 'dead'}>Estado: {character.status === 'unknown' ? ('Unknown') : (character.status)}</p>
              <p className="p-">Origen: {character.origin.name === 'unknown' ? ('Unknown') : (character.origin.name)}</p>
              <p className="p-">Ubicación: {character.location.name}</p>
            </div>
          </div>
        </article>

      ) : ('No hay personajes')}
    </>
  )
}

export default Personaje