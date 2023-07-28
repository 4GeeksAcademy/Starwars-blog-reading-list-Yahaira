import React,{useState, useEffect, useContext} from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import CardPlanetas from "../component/cardPlanetas.jsx";
import CardVehiculos from "../component/cardVehiculos.jsx";
import {Context} from "../store/appContext.js"

export const Home = () => {

const{store}= useContext(Context)

return(
	<div className="row text-center">
    <div className="col-lg-4 col-md-4" >
		<h1 className="fw-bold text-decoration-underline">PERSONAJES</h1>
		{store.personajes.map((item)=> <Card key={item.uid} nombre={item.name} id={item.uid} /> )}
    </div>
	<div className="col-lg-4 col-md-4" >
	<h1 className="fw-bold text-decoration-underline">VEHICULOS</h1>
	{store.vehiculos.map((item)=> <CardVehiculos key={item.uid} nombreVehiculo={item.name} idVehiculo={item.uid}/>)}
 	</div>
	<div className="col-lg-4 col-md-4" >
	<h1 className="fw-bold text-decoration-underline">PLANETAS</h1>
	{store.planetas.map((item)=> <CardPlanetas key={item.uid} nombrePlaneta={item.name} idPlaneta={item.uid}/>)}
 	</div>
	</div>
)
}

