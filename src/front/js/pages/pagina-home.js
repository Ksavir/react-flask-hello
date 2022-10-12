import React, { useContext } from "react";
import { Context } from "../store/appContext";
import guinazu from "../../img/guinazu.png";
import coinc from "../../img/coinc.png";
import "../../styles/pagina-home.css";
import { Navbarhome } from "../component/navbarhome";

export const PaginaHome = () => {
  const { store, actions } = useContext(Context);
  const convertir = () => {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 935;
    var euro = 906;
    var ves = 0.01;
    if (document.getElementById("uno").checked) {
      resultado = valore / dolar;
      alert(
        "El cambio de pesos chilenos a dólares es: $" + resultado.toFixed(2)
      );
    } else if (document.getElementById("dos").checked) {
      resultado = valore / euro;
      alert("El cambio de pesos chilenos a euros es: " + resultado.toFixed(2));
    } else if (document.getElementById("tres").checked) {
      resultado = valore * ves;
      alert(
        "El cambio de pesos chilenos a bolívares es: " + resultado.toFixed(2)
      );
    } else {
      alert("Debe completar todos los campos");
    }
  };
  return (
    <>
      <Navbarhome />

      <div className="container-pagina-home">
        <form id="formulario_ph" className="">
          <bl>
            <br></br>
          </bl>
          <div className="convertidor">
            <h1 className="textocolor" id="title">
              Consigue la mejor tasa aquí
            </h1>
            <bl>
              <br></br>
            </bl>
            <h6 className="titulos">Seleccione la moneda que desea cambiar:</h6>
            <input type="radio" name="cambio" id="uno" />
            USD
            <input type="radio" name="cambio" id="dos" />
            EUR
            <input type="radio" name="cambio" id="tres" />
            VES
            <h6 className="titulos">Ingrese monto en pesos chilenos:</h6>
            <input type="number" id="valor" min="1000" max="1000000" />
            <input
              type="button"
              id="cotizador"
              value="Cotizar"
              onClick={convertir}
            />
          </div>
        </form>
        <div>
          <div id= "conjuntocasas">
            <div id="cartaCasa" class="card">
              <div>
                <img
                  className="logo"
                  class="card-img-top"
                  id="fotocartacasa"
                  src={coinc}
                />
                <br></br>
              </div>
              <div>
                <div dangerouslySetInnerHTML={{ __html: store.moreexchange }} />
                <a
                  onclick="window.location = 'gracias.html'"
                  target="_new"
                  href="https://www.moreexchange.cl/"
                >
                  Ir a Moreexchange
                </a>
              </div>
            </div>
            <div id="cartaCasa2" class="card">
              <div>
                <img className="logo" id="fotocartacasa" src={guinazu} />
              </div>
              <div>
                <div dangerouslySetInnerHTML={{ __html: store.cambiossuiza }} />
                <br></br>
                <a
                  onclick="window.location = 'gracias.html'"
                  target="_new"
                  href="https://www.guinazu.cl/"
                >
                  Ir a Guiñazu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
