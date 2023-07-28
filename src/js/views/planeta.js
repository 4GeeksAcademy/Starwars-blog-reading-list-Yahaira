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
		<div className="card mb-3 w-200 border-warning border border-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={"https://starwars-visualguide.com/assets/img/planets/" + params.theid+ ".jpg"} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h1 className="card-title fw-bold text-decoration-underline lh-base text-center">{store.informacionPlaneta.properties?.name}</h1>
        <p className="card-text text-justify">This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
		<table className="table table-borderless ">
      <thead className="table-danger text-danger">
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
      <tbody className="table-warning text-danger">
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