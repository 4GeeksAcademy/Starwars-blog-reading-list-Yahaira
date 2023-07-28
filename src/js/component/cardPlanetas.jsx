import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext.js"

const CardPlanetas   = (props) =>{
    const{store,actions}= useContext(Context)
	const params = useParams();

    return(
    
        <div className="col-md card d-flex content-justify m-2 border-warning border border-3">
            <img src={"https://starwars-visualguide.com/assets/img/planets/"+ props.idPlaneta +".jpg"} className="card-img-top"height="250px" width="150px" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start fw-bold">{props.nombrePlaneta}</h5>
                <p className="card-text text-start"></p>
                <div className="d-flex justify-content-between">
                    <Link to={"/planeta/"+ props.idPlaneta} className="card-link">
                        <button type="button" className="btn btn-outline-primary border-primary border border-2 fw-bold">Learn more!</button>
                    </Link>
                    <Link to="#" className="card-link">
                        <button onClick={() => actions.addFav(props.nombrePlaneta)} 
                        type="button" className="btn btn-outline-warning"><i className="fa fa-heart"></i></button>
                    </Link>
                </div>
               
            </div>
        </div>
    


    );
};

export default CardPlanetas;