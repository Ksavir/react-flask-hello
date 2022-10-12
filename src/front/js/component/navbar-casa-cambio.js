import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import "../../styles/navbar-casa-cambio.css";

export const NavbarCasasCambio = () => {
	return (
		<nav className="navbar navbar-light bg-light fixed-top">
			<div className="container-fluid">
				<Link to="/pagina-home">
					<img id="logo" src={logo} alt="Logo Casa de Cambio"/>
					<span id="titulo" className="navbar-brand mx-2 my-2 p-0">Cacha el cambio</span>
				</Link>
				<div className="ml-auto">
					<Link to="/pagina-home">
						<button className="boton mx-2">Home</button>
					</Link> 
					<Link to="/">
						<button className="boton mx-2">Salir</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
