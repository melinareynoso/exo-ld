import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Asegúrate de importar los estilos del componente
import "./Carousel.css";

import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpg";

export default function carousel() {
  return (
    <section className="Testimonios" id="Testimonios">

      <h2 className="testimonios-title">Testimonios</h2>
      <h3>Los servicios de Luz Divina son altamente valorados por su precisión y su capacidad 
      para ayudar a las personas a tomar decisiones informadas y positivas. </h3>

      <div className="carousel-wrapper">
        <Carousel showThumbs={false}>
          <div>
            {/* <p className="legend">Testimonio 1</p> */}
            <img className="carousel-image" src={image1} alt="Testimonio" />
          </div>
          <div>
            {/* <p className="legend">Testimonio 2</p> */}
            <img className="carousel-image" src={image2} alt="Testimonio" />
          </div>
          <div>
            {/* <p className="legend">Testimonios 3</p> */}
            <img className="carousel-image" src={image3} alt="Testimonio" />
          </div>
          <div>
            {/* <p className="legend">Testimonios 4</p> */}
            <img className="carousel-image" src={image4} alt="Testimonio" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
