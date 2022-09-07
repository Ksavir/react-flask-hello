import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Stark from "../../img/stark.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex justify-content-around my-4">
			<div className="d-flex flex-column align-items-center">
				<img  id="img-perfil" src={Stark} alt="equipo stark"/>
				<div className="d-flex justify-content-bewteen my-4">
					<div id="favoritos" className="mx-3"><p>Favoritos</p></div>
					<div id="interacciones"><p>Ultimas interacciones</p></div>
				</div>
			</div>
			<form id="formulario" className="">
			<h3 id="title" className="my-3" >Hola, Usuario</h3>
			<div className="mb-3">
				<label id="info-name" for="exampleInputName" className="form-label">Ingresa tu nombre</label>
				<input type="text" className="form-control" id="name"/>
				<button type="submit" id="boton">Cambiar</button>
			</div>
			<div className="mb-3">
				<label id="email" for="exampleInputEmail1" className="form-label">Correo Electronico</label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				<button type="submit" id="boton">Cambiar</button>
			</div>
			<div className="mb-3">
				<label id="password" for="exampleInputPassword1" className="form-label">Contraseña</label>
				<input type="password" className="form-control" id="exampleInputPassword1"/>
				<button type="submit" id="boton">Cambiar</button>
			</div>
			<div className="mb-3">
				<label id="info-number" for="exampleInputNumber" className="form-label">Numero Telefonico</label>
				<input type="text" className="form-control" id="number" placeholder="+56 9"/>
				<button type="submit" id="boton">Cambiar</button>
			</div>
			<button type="submit" id="boton">Guardar Cambios</button>
		</form>	
		</div>
	);
};
