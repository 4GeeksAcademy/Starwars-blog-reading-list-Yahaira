import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext.js"


export const Single = props => {
  const{store,actions}= useContext(Context)
	
	const params = useParams();
  useEffect(()=>{
    actions.obtenerPersonajesIndividuales(params.theid);
  },[])
	
 
console.log(store.informacionPersonaje.properties?.name);

	


	return (
		<div className="card mb-3 w-200 ">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={"https://starwars-visualguide.com/assets/img/characters/" + params.theid+ ".jpg"} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h1 className="card-title fw-bold text-decoration-underline lh-base text-center">{store.informacionPersonaje.properties?.name}</h1>
        <p className="card-text text-justify">Dentro de la franquicia de medios Star Wars, existe una gran cantidad de personajes, en este anexo: https://es.wikipedia.org/wiki/Anexo:Personajes_de_Star_Wars se listan y describen tanto a los personajes principales como a otros menores parte del canon oficial de Star Wars, a partir de los cambios realizados por Lucasfilm en abril de 2014. Luego de su adquisición por parte de The Walt Disney Company en 2012, Lucasfilm cambió el nombre de la mayoría de las novelas, cómics, videojuegos y otros trabajos producidos desde la película original de 1977 Star Wars como Star Wars Legends y los declaró no canónicos para el resto de la franquicia. 1​2​

Algunos de estos personajes solo pertenecen a la continuidad alternativa "Leyendas", material previo al reinicio del canon en 2014, por tanto no forman parte de la historia oficial de la saga.</p>
      </div>
    </div>
  </div>
		<table className="table table-borderless ">
      <thead className="table-dark text-white">
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Birth Year</th>
          <th scope="col">Hair Color</th>
	        <th scope="col">Eye Color</th>
	        <th scope="col">Height</th>
	        <th scope="col">Mass</th>
        </tr>
      </thead>
      <tbody className="table-warning text-dark">
        <tr>
          <th scope="row"></th>
          <td>{store.informacionPersonaje.properties?.name}</td>
          <td>{store.informacionPersonaje.properties?.birth_year}</td>
          <td>{store.informacionPersonaje.properties?.hair_color}</td>
	        <td>{store.informacionPersonaje.properties?.eye_color}</td>
	        <td>{store.informacionPersonaje.properties?.height}</td>
	        <td>{store.informacionPersonaje.properties?.mass}</td>
        </tr>
      </tbody>
    </table>
	</div>		
	);
};

Single.propTypes = {
	match: PropTypes.object
};

