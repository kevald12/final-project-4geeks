import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../img/citaperro.jpg";
import "../../img/informacionmedica.png";
import "../../img/mismolugar.jpg";
import "../../img/perrocita.jpeg";

export const Beneficios = () => {
  return (
    <div>
      <div className="container-fluid" id="bgBeneficios">
        <div className="container">
          <div className="m-5 p-5 vw-50 vh-50">
            <h2 className="text-center fs-1 text-warning mb-4">Beneficios</h2>
            <div
              id="carouselBeneficios"
              className="carousel carousel-dark slide"
              data-bs-ride="false"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselBeneficios"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselBeneficios"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselBeneficios"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="mismolugar.jpg"
                    className="d-block w-100"
                    alt="perro al telefono"
                  />
                  <div className="carousel-caption d-none d-md-block bg-dark text-white p-2">
                    <h5 className="fs-3">Todo en un mismo lugar...</h5>
                    <p className="fs-5">
                      ??Ten??s miles de expedientes para tus clientes en papel?
                      ??Ten??s que repetir la informaci??n o imprimirla para que el
                      cliente pueda acceder a ella? Con PetSource tanto el
                      m??dico veterinario como el cliente humano encontrar?? la
                      informaci??n en el mismo lugar. Un software f??cil y
                      sencillo de utilizar pensado en facilitar la comunicaci??n
                      m??dico/cliente.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="informacionmedica.png"
                    className="d-block w-100"
                    alt="gato en la veterinaria"
                  />
                  <div className="carousel-caption d-none d-md-block bg-light text-dark p-2">
                    <h5 className="fs-3">
                      Ten??s la informaci??n m??dica de tu mascota a mano...
                    </h5>
                    <p className="fs-5">
                      ??Olvidaste cu??ndo fue la ??ltima vacuna de tu mascota? ??No
                      ten??s la tarjeta con su informaci??n a mano? Peor a??n, se
                      te pierden siempre sus tarjetas de vacunas. ??No te
                      preocup??s! Con <strong>PetSource</strong> todo lo ten??s en
                      el mismo lugar. Sus atenciones m??dicas, las
                      desparacitaciones y las vacunas las encontrar??s en su
                      expediente con tan solo ingresar a nuestra p??gina.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="citaperro.jpg"
                    className="d-block w-100"
                    alt="perro y gato viendo la computadora"
                  />
                  <div className="carousel-caption d-none d-md-block bg-dark text-white p-2">
                    <h5 className="fs-3">Agendar tu cita en l??nea...</h5>
                    <p className="fs-5">
                      ??Requer??s una cita para tu mascota? Ahora pod??s hacerlo a
                      un click de distancia tan solo ingresando a nuestra app.
                      Se te brindar?? la opci??n de sacar la cita para la hora y
                      d??a que mejor se acomode a tus necesidades sin necesidad
                      de que teng??s que contactar directamente a la veterinaria.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselBeneficios"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselBeneficios"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
