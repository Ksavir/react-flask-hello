import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import "../../styles/pagina-home.css";
import { Navbarhome } from "../component/navbarhome";

export const PaginaHome = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Navbarhome />

      <div className="container-pagina-home">
        <form id="formulario_ph" className="">
          <bl>
            <br></br>
          </bl>
          <h1 className="textocolor" id="title">
            Consigue la mejor tasa aquí
          </h1>
          <bl>
            <br></br>
          </bl>
          <div className="mb-3  mx-4" id="name">
            <label
              id="ingresar-monto"
              for="exampleInputName"
              className="form-label"
            >
              Ingresa un monto
            </label>
            <input type="usuario" className="form-control" id="data" />
            <div className="dropdown">
              <select id="divisas" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Selecciona divisa</option>
                <option value="usdolar">USD</option>
                <option value="clpesos">CLP</option>
                <option value="euro">EU</option>
              </select>
            </div>
          </div>
          <div className="mb-3 d-flex mx-4">
            <label
              id="monto-recibir"
              for="exampleInputEmail1"
              className="form-label"
            >
              Monto a recibir
            </label>
            <input type="email" className="form-control" id="data" />
            <div className="dropdown">
              <select id="divisas" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Selecciona divisa</option>
                <option value="usdolar">USD</option>
                <option value="clpesos">CLP</option>
                <option value="euro">EU</option>
              </select>
            </div>
          </div>
          <div className="mb-3 d-flex mx-4">
            <label
              id="tipo-cambio"
              for="exampleInputPassword1"
              className="form-label"
            >
              Tasa de Cambio
            </label>
            <input type="text" className="form-control" id="data" />
            <button type="submit" id="botonCambiar">
              Cambiar
            </button>
          </div>
        </form>
        <div className="tarjetas card-group">
          <div id="cartaCasa" class="card">
            <div>
              <img
                className="logo"
                class="card-img-top"
                id="fotocartacasa"
                src={logo}
              />
            </div>
            <div>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <div class="card-body"></div>
            </div>
            <div>
              <input
                type="usuario"
                className="form-control"
                id="CambioRecibirCasa1"
              />
            </div>
            <bl>
              <br></br>
            </bl>
            <input
              type="usuario"
              className="form-control"
              id="infooRecibirCasa1"
            />

            <div class="card-body">
              <button type="submit" href="#" class="card-link" id="botonlinkCCC">
                Ir a casa de cambio
              </button>
            </div>
          </div>
          <div id="cartaCasa2" class="card">
            <div>
              <img className="logo" id="fotocartacasa" src={logo} />
            </div>
            <div>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
            </div>
            <div class="card-body"></div>

            <input
              type="usuario"
              className="form-control"
              id="CambioRecibirCasa2"
            />
            <bl>
              <br></br>
            </bl>
            <input
              type="usuario"
              className="form-control"
              id="infooRecibirCasa2"
            />

            <div class="card-body">
              <button type="submit" href="#" class="card-link" id="botonlinkCCC">
                Ir a casa de cambio
              </button>
            </div>
          </div>
          <div id="cartaCasa3" class="card">
            <div>
              <img className="logo" id="fotocartacasa" src={logo} />
            </div>
            <div>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
              <bl>
                <br></br>
              </bl>
            </div>
            <div class="card-body"></div>

            <input
              type="usuario"
              className="form-control"
              id="CambioRecibirCasa3"
            />
            <bl>
              <br></br>
            </bl>
            <input
              type="usuario"
              className="form-control"
              id="infooRecibirCasa3"
            />

            <div class="card-body">
              <button type="submit" href="#" class="card-link" id="botonlinkCCC">
                Ir a casa de cambio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
