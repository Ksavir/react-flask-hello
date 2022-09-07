import React, { useContext } from "react";
import { Context } from "../store/appContext";
import img1 from "../../img/carrusel-1.png";
import img2 from "../../img/carrusel-2.jpg";
import img3 from "../../img/carrusel-3.jpg";
import "../../styles/recuperar-contrasena.css";

export const RecuperarContraseña = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex justify-content-around my-4">
			<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={img1} className="d-block w-80" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src={img2} className="d-block w-80" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src={img3} className="d-block w-80" alt="..."/>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
		<form id="formulario" className="">
			<h3 id="title" className="my-3">Recupera tu contraseña</h3>	
			<div className="mb-3">
				<label id="password" for="exampleInputPassword1" className="form-label">Nueva Contraseña</label>
				<input type="password" className="form-control" id="exampleInputPassword1"/>
			</div>
			<div className="mb-3">
				<label id="c-password" for="exampleInputPassword1" className="form-label">Confirma tu contraseña</label>
				<input type="password" className="form-control" id="exampleInputPassword1"/>
			</div>
			<button type="submit" id="boton">Restablecer</button>
		</form>
	</div>
		
	);
};
