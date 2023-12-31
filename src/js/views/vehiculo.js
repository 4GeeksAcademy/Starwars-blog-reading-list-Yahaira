import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehiculo = props => {
	const { store, actions } = useContext(Context);
	
	const [informacionVehiculo,setInformacionVehiculo] = useState([])
  const params = useParams();

  useEffect(()=>{
    actions.obtenerVehiculo(params.theid);
  },[])
	
 

	return (
		<div className="card mb-3 w-200 border-dark border border-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+ params.theid+ ".jpg"} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h1 className="card-title fst-italic text-decoration-none lh-base text-center">{store.informacionVehiculo.properties?.name}</h1>
        <p className="card-text text-justify">En Star Wars existen inumerables vehículos y formas de propulsión. La mayoría de estos suelen tener un sistema de "repulsión" que los hace literalmente flotar sobre el suelo. Además, también hay una gran variedad de vehículos tanto aéreos como espaciales. Otros vehículos son sencillamente tanques zoomorfos que caminan como animales sobre los suelos de los más inhóspitos planetas.En Star Wars existen inumerables vehículos y formas de propulsión. La mayoría de estos suelen tener un sistema de "repulsión" que los hace literalmente flotar sobre el suelo. Además, también hay una gran variedad de vehículos tanto aéreos como espaciales. Otros vehículos son sencillamente tanques zoomorfos que caminan como animales sobre los suelos de los más inhóspitos planetas.En Star Wars existen inumerables vehículos y formas de propulsión. La mayoría de estos suelen tener un sistema de "repulsión" que los hace literalmente flotar sobre el suelo. Además, también hay una gran variedad de vehículos tanto aéreos como espaciales. Otros vehículos son sencillamente tanques zoomorfos que caminan como animales sobre los suelos de los más inhóspitos planetas.</p>
      </div>
    </div>
  </div>
		<table className="table table-borderless ">
      <thead className="table-dark text-white">
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Model</th>
          <th scope="col">Length</th>
	        <th scope="col">Crew</th>
	        <th scope="col">Cost In Credits</th>
	        <th scope="col">Cargo Capacity</th>
        </tr>
      </thead>
      <tbody className="table-warning text-dark">
        <tr>
          <th scope="row"></th>
          <td>{store.informacionVehiculo.properties?.name}</td>
          <td>{store.informacionVehiculo.properties?.model}</td>
          <td>{store.informacionVehiculo.properties?.length}</td>
	        <td>{store.informacionVehiculo.properties?.crew}</td>
	        <td>{store.informacionVehiculo.properties?.cost_in_credits}</td>
	        <td>{store.informacionVehiculo.properties?.cargo_capacity}</td>
        </tr>
      </tbody>
    </table>
	</div>		
	);
};

Vehiculo.propTypes = {
	match: PropTypes.object
};