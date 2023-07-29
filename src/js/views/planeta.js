import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planeta = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	const [informacionPlaneta,setInformacionPlaneta] = useState([])


  useEffect(()=>{
    actions.obtenerPlaneta(params.theid);
  },[])




	return (
		<div className="card mb-3 w-200 border-dark border border-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={"https://starwars-visualguide.com/assets/img/planets/" + params.theid+ ".jpg"} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h1 className="card-title fst-italic text-decoration-none lh-base text-center">{store.informacionPlaneta.properties?.name}</h1>
        <p className="card-text text-justify">Los planetas se clasificaban, generalmente, en tres tipos: planetas terrestres, planetas acuáticos y gigantes gaseosos. Aunque los gigantes gaseosos eran, por lo general, inhabitables, se podían construir plataformas flotantes en el interior, como la de la Ciudad de las Nubes, si el planeta tenía una atmósfera respirable. Al grupo de planetas, lunas, y asteroides que orbitaban conjuntamente alrededor de una estrella se les denominaba sistema estelar. La galaxia albergaba miles de millones de sistemas estelares. Aunque, por lo general, los planetas orbitaban un solo sol, algunos, como Tatooine o Gatalenta, estaban ubicados en sistemas que orbitaban múltiples. Ciertos planetas eran sensibles a la Fuerza, como Dathomir.</p>
      </div>
    </div>
  </div>
		<table className="table table-borderless ">
      <thead className="table-dark text-white">
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Diameter</th>
          <th scope="col">Gravity</th>
	        <th scope="col">Rotation Period</th>
	        <th scope="col">Surface Water</th>
	        <th scope="col">Climate</th>
        </tr>
      </thead>
      <tbody className="table-warning text-dark">
        <tr>
          <th scope="row"></th>
          <td>{store.informacionPlaneta.properties?.name}</td>
          <td>{store.informacionPlaneta.properties?.diameter}</td>
          <td>{store.informacionPlaneta.properties?.gravity}</td>
	        <td>{store.informacionPlaneta.properties?.rotation_period}</td>
	        <td>{store.informacionPlaneta.properties?.surface_water}</td>
	        <td>{store.informacionPlaneta.properties?.climate}</td>
        </tr>
      </tbody>
    </table>
	</div>		
	);
};

Planeta.propTypes = {
	match: PropTypes.object
};