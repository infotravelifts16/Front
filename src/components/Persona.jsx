import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Persona = () => {
  return (
    <section className="mb-20 text-gray-700">
      <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <p className="font-Amatic xl:text-5xl md:text-5xl text-2xl mt-6 mb-6 pb-2 md:mb-12 md:pb-0 text-center hover:text-teal-300 text-black font-normal hover:font-bold">
          Somos un equipo de compañeros del Instituto de Formación Técnica
          Superior N°16.
          <br />
          Finalizando la carrera en la materia Práctica Profesional 3, se
          planifica y desarrolla un trabajo final, dando lugar a Infotravel.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 text-center">
        {/* INICIO ---------- Integrante: Oscar Bejar */}
        <div>
          <div className="block rounded-lg shadow-lg bg-white hover:opacity-90">
            <div
              className="overflow-hidden rounded-t-lg h-28"
              style={{ backgroundColor: "#34d399" }}
            ></div>
            <div className="w-24 -mt-12 overflow-hidden  border-2 border-white rounded-full mx-auto bg-white">
              <img src="img/integrantes/oscar.png" alt="Oscar Bejar" />
            </div>

            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-4">Oscar Bejar</h4>
              <hr />
              <p className="mt-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Desarrollador Back-End
              </p>
              <a
                href="https://www.linkedin.com/in/oscarbejar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-blue-700 w-5 h-10"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Fin--------- Integrante: Oscar Bejar */}

        {/* INICIO ---------- Integrante: Stefania Rojas */}
        <div>
          <div className="block rounded-lg shadow-lg bg-white hover:opacity-90">
            <div
              className="overflow-hidden rounded-t-lg h-28"
              style={{ backgroundColor: "#f0abfc" }}
            ></div>
            <div className="w-24 -mt-12 overflow-hidden  border-2 border-white rounded-full mx-auto bg-white">
              <img src="img/integrantes/stefania.png" alt="stefania rojas" />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-4">Stefania Rojas</h4>
              <hr />
              <p className="mt-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Desarrolladora Front-End
              </p>
              <a
                href="https://www.linkedin.com/in/stefan%C3%ADa-karen-rojas-vilte-957693159/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-blue-700 w-5 h-10"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Fin--------- Integrante: Stefania Rojas */}

        {/* INICIO ---------- Integrante: Matias Minig */}
        <div>
          <div className="block rounded-lg shadow-lg bg-white hover:opacity-90">
            <div
              className="overflow-hidden rounded-t-lg h-28"
              style={{ backgroundColor: "#0e7490" }}
            ></div>
            <div className="w-24 -mt-12 overflow-hidden  border-2 border-white rounded-full mx-auto bg-white">
              <img src="img/integrantes/matias.png" alt="matias minig" />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-4">Matias Minig</h4>
              <hr />
              <p className="mt-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Desarrollador Front-End
              </p>
              <a
                href="https://www.linkedin.com/in/matiasminig/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-blue-700 w-5 h-10"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Fin--------- Integrante: Matias Minig */}

        {/* INICIO ---------- Integrante: Leandro Campolongo */}
        <div>
          <div className="block rounded-lg shadow-lg bg-white hover:opacity-90">
            <div
              className="overflow-hidden rounded-t-lg h-28"
              style={{ backgroundColor: "#38bdf8" }}
            ></div>
            <div className="w-24 -mt-12 overflow-hidden  border-2 border-white rounded-full mx-auto bg-white">
              <img src="img/integrantes/leandro.png" alt="leandro campolongo" />
            </div>

            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-4">
                Leandro Campolongo
              </h4>
              <hr />
              <p className="mt-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Desarrollador Back-End
              </p>
              <a
                href="https://www.linkedin.com/in/leandro-campolongo-3a4717166/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-blue-700 w-5 h-10"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Fin--------- Integrante: Leandro Campolongo */}

        {/* INICIO ---------- Integrante: Maximiliano Ramos */}
        <div>
          <div className="block rounded-lg shadow-lg bg-white hover:opacity-90">
            <div
              className="overflow-hidden rounded-t-lg h-28"
              style={{ backgroundColor: "#93c5fd" }}
            ></div>
            <div className="w-24 -mt-12 overflow-hidden  border-2 border-white rounded-full mx-auto bg-white">
              <img src="img/integrantes/maxi.png" alt="maximiliano ramos" />
            </div>

            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-4">Maximiliano Ramos</h4>
              <hr />
              <p className="mt-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Desarrollador Back-End
              </p>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-blue-700 w-5 h-10"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Fin--------- Integrante: Maximiliano Ramos */}
      </div>
    </section>
  );
};

export default Persona;
