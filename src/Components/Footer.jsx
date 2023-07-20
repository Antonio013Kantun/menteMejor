import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <>
      <header>
        <link rel="icon" href="img/mbd-favicon.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </header>
      <footer class="text-center text-lg-start bg-[#19439d] text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            
          </div>

          <div>
            
          </div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5 text-white">
           
            <div class="row mt-3">

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                <h6 class="text-uppercase fw-bold mb-4">Contactanos</h6>
                <p>
                  <i class="fas fa-home me-3 text-lime-50"></i> Benito Juarez,
                  UT Cancun, MX
                </p>
                <p>
                  <i class="fas fa-envelope me-3 text-lime-50 "></i>
                  mentemejor@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3 text-lime-50 "></i> + 01 234 567
                  88
                </p>
                <p>
                  <i class="fas fa-print me-3 text-lime-50 "></i> + 01 234 567
                  89
                </p>
                <div>
                  <a href="" class="me-4 link-secondary">
                    <i class="fab fa-facebook-f text-lime-50"></i>
                  </a>
                  <a href="" class="me-4 link-secondary">
                    <i class="fab fa-instagram text-lime-50"></i>
                  </a>
                  <a href="" class="me-4 link-secondary">
                    <i class="fab fa-twitter text-lime-50"></i>
                  </a>
                </div>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-lime-50">
                {/* Links */}
                <h6 class="text-uppercase fw-bold mb-4">Productos</h6>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Estar inquieto
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Masticacion
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Visual
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Juguetes para bebes
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Motor fino
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Fuerza de la mano
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Motor grueso
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Fino
                  </a>
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Enlaces rapidos</h6>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Inicio
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Sobre nosotros
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Comprar por categoria
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Nuestro blog
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Busqueda personalizada
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Contactos
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Mantengase en contacto
                </h6>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Suscribete a nuestro boletin
                  </a>
                </p>
                <p>
                  <form class="d-flex input-group w-auto">
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder=""
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search"></i>
                    </span>
                  </form>
                </p>
                <div>
                <img class="bancoimg img-responsive st_1684644237" src="https://mixelementor.wpengine.com/wp-content/uploads/2018/11/cards.png" 
            alt="Trust badges"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="footer text-center p-4 text-lime-50">
          © 2023 Copyright:
          <a
            class="text-reset fw-bold text-decoration-none"
            href="https://mdbootstrap.com/"
          >
            {" "}
            mentemejor.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
