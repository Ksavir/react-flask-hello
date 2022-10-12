import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import cambioSuiza from "../../img/cambios-suiza.png";
import moreEx from "../../img/moreExchange.png";
import cambioStgo from "../../img/cambioSantiago.png";
import guinazu from "../../img/guinazu.png";
import {NavbarCasasCambio } from "../component/navbar-casa-cambio"
import "../../styles/casas-cambio.css";


export const CasasCambio = () => {
	const { store, actions } = useContext(Context);
	const [seleccionMapa, setSeleccionMapa] = useState("cambios-suiza");
	const mapa = (evento) => {
		setSeleccionMapa(evento.target.value)
	}

	return (
		<div>
			<>
			<NavbarCasasCambio/>
			<div id="body-info-casa ">
				<div className="container-fluid">
					<div className="row">
						<div className="col">
							<div className="card card-flip">
								<div className="card-front">
									<div className="card-body">
										<img id="suiza" src={cambioSuiza} alt="Cambios Suiza" />
									</div>
								</div>
								<div className="card-back">
									<div className="card-body">
										<p className="card-text"> Agustinas 1036, SANTIAGO</p>
										<p className="card-text">+56-226990811 / +56-226973875</p>
										<p className="card-text">info@inversionessuiza.cln</p>
										<button id="boton-casa"><a href="http://www.cambiossuiza.com/" target="blank">Ir a la web</a></button>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card card-flip">
								<div className="card-front-me">
									<div className="card-body">
										<img id="moreExchange" src={moreEx} alt="More Exchange" />
									</div>
								</div>
								<div className="card-back">
									<div className="card-body">
										<p>Pedro de Valdivia 29, Providencia</p>
										<p>+56 22 233 1865</p>
										<p>info@moreexchange.cl</p>
										<button id="boton-casa"><a href="http://www.moreexchange.cl/" target="blank">Ir a la web</a></button>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card card-flip">
								<div className="card-front">
									<div className="card-body">
										<img id="cambioSantiago" src={cambioStgo} alt="Cambios Santiago" />
									</div>
								</div>
								<div className="card-back">
									<div className="card-body">
										<p>San Sebastian 2814, Las Condes</p>
										<p>+56 2 2233 5327 +56 9 3954 0161 /0162 </p>
										<p>cambios@cstgo.cl</p>
										<button id="boton-casa"><a href="https://www.cambiosantiago.cl/" target="blank">Ir a la web</a></button>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card card-flip">
								<div className="card-front">
									<div className="card-body">
										<img id="cambioCostero" src={guinazu} alt="Guinazu" />
									</div>
								</div>
								<div className="card-back">
									<div className="card-body">
										<p>Bandera 585</p>
										<p>Av. El Bosque Norte 0192</p>
										<p>Libertador Bernardo O'Higgins 3156</p>
										<p>+56 2 3251 0902 / 03</p>
										<button id="boton-casa"><a href="http://www.cambiocostero.cl/" target="blank">Ir a la web</a></button>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div id="maps">
							<div id="dropdown">
								<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="casas" id="casas-cambio" onChange={(evento) => mapa(evento)}>
									<option value="default" selected>Busca tu casa</option>
									<option value="cambios-suiza">Cambios Suiza</option>
									<option value="more-exchange">More Exchange</option>
									<option value="cambios-santiago">Cambios Santiago</option>
									<option value="guinazu">Guiñazu</option>
								</select>
							</div>

							{(seleccionMapa == "cambios-suiza")
								?
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3222058941647!2d-70.65355328426506!3d-33.44091110440973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a154609d6b%3A0x7e08b90ce4e278ce!2sInversiones%20Suiza%20ltda!5e0!3m2!1ses-419!2scl!4v1662910027055!5m2!1ses-419!2scl" width="1300" height="150" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
								:
								(seleccionMapa == "more-exchange")
									?
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.500896220115!2d-70.65311982315025!3d-33.435492951555574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5937be7de53%3A0x593260354e02f529!2sMore%20Exchange%20Casa%20de%20Cambios%20-%20Sucursal%20Santiago%20Centro%20(Mall%20Vivo%20El%20Centro)!5e0!3m2!1ses-419!2scl!4v1662820113645!5m2!1ses-419!2scl" width="1300" height="150"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
									:
									(seleccionMapa == "cambios-santiago")
										?
										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1177.4338020645853!2d-70.60204381919567!3d-33.415795004387576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf41cfa6b755%3A0x3c7ed9b44e3495a2!2sSan%20Sebasti%C3%A1n%202814%2C%20Las%20Condes%2C%207550151%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1665365604758!5m2!1ses-419!2scl" width="1300" height="150" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
										:
										(seleccionMapa == "guinazu") && <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d53270.8925318898!2d-70.63682827183715!3d-33.4380815833659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scambios%20gui%C3%B1azu!5e0!3m2!1ses-419!2scl!4v1665602842183!5m2!1ses-419!2scl" width="1300" height="150"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
						}
					</div>
				</div>
			</div>
			</>	
		</div>
	
	);
};
