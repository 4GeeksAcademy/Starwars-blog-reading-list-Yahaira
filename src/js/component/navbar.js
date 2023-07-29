import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext.js"

export const Navbar = () => {

	const{store,actions}= useContext(Context)
	
	const params = useParams();

	return (
		<nav className="col-md navbar navbar-light border-dark border border-3 m-2 bg-warning">
			<Link to="/">
			<img src="https://i.pinimg.com/600x315/fe/22/ab/fe22ab0220d6ad64fefd36780a344b4d.jpg" width="150px" className="img-thumbnail bg-dark ms-5 border border-3 " alt="..."/>
			</Link>
			<div className="ml-auto">
				<div className="dropdown me-5">
  					<button className="btn btn-dark text-italic fs-1 btn-sm dropdown-toggle border-dark border border-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
