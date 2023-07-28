import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext.js"

export const Navbar = () => {

	const{store,actions}= useContext(Context)
	
	const params = useParams();

	return (
		<nav className="col-md navbar navbar-light border-warning border border-3 m-2">
			<Link to="/">
			<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" width="250px" className="img-thumbnail bg-dark ms-5 border-warning border border-3" alt="..."/>
			</Link>
			<div className="ml-auto">
				<div className="dropdown me-5">
  					<button className="btn btn-dark text-bold fs-1 btn-lg dropdown-toggle border-warning border border-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    				Favoritos
  					</button>
  					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					  {store.listaFavoritos.map((item,id) => (
					<li  key={id}>
						{item} <button onClick={()=>actions.deleteFav(id)}>
						<i className="fa fa-trash"></i></button>
					</li>
				))}
  					</ul>
				</div>
			</div>
		</nav>
	);
};
