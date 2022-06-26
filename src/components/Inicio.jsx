import React, {useEffect, useState} from "react";
import { allCharacters } from "../functions/funciones";
import Header from "./Header";
import '../css/Inicio.css'
import { useRef } from "react";

const Inicio = () => {
  
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    allCharacters(1, setCharacters)
  },[])

  const inputRef = useRef()
  const enviar = () => {
    allCharacters(inputRef.current.value, setCharacters)
    console.log(inputRef.current.value);
  }

  return(
    <>
      <Header />
      <div className="container">{characters != null ? (
        characters.map( character => (
          <div className="character" key={character.id}>
            <img className="character-img" src={character.image} alt="imagen" />
            <div className="character-info">
              <a className="link" href={`/personaje/${character.id}`}>{character.name}</a>
              <p className="especie">Especie: {character.species}</p>
              <p className= { character.status === 'Alive' ? 'alive' : 'dead'} >Estado: {character.status === 'unknown' ? ('Unknown') : (character.status)}</p>
            </div>
          </div>
        ))
      ) : ('No hay personajes')}
      </div>
      <div className="page">
        <p>Ingrese un numero de página: </p>
        <input type="number" max="41" min="1" id="page-input" name="page" ref={inputRef}/>
        <button onClick={enviar} className="page-btn">Buscar</button>
      </div>
    </>
  )
}

export default Inicio