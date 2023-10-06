import "./styles.css";
import astrologia from "./imgserv/astrologia.png";
import bola from "./imgserv/bola.png";
import chakra from "./imgserv/chakra.png";
import clarividente from "./imgserv/clarividente.png";
import intsuenos from "./imgserv/intsuenos.png";
import mblanca from "./imgserv/mblanca.png";
import medium from "./imgserv/medium.png";
import numer from "./imgserv/numer.png";
import pendulo from "./imgserv/pendulo.png";
import reiki from "./imgserv/reiki.png";
import rituales from "./imgserv/rituales.png";
import runas from "./imgserv/runas.png";
import sanadora from "./imgserv/sanadora.png";
import sensitiva from "./imgserv/sensitiva.png";
import vidente from "./imgserv/vidente.png";


export default function Servicios() {
    return (
        <section id="Servicios">
            <h2 id="titleservicios">Servicios</h2>

        <div id="contenedorserv">
            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={astrologia} width="120px"></img>
                <h4 id="nameservice">Astróloga</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={chakra} width="120px"></img>
                <h4 id="nameservice">Chakras</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={clarividente} width="120px"></img>
                <h4 id="nameservice">Clarividente</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={intsuenos} width="120px"></img>
                <h4 id="nameservice">Interpretación<br></br>de sueños</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={mblanca} width="120px"></img>
                <h4 id="nameservice">Magia blanca</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={medium} width="120px"></img>
                <h4 id="nameservice">Medium</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={numer} width="120px"></img>
                <h4 id="nameservice">Numerólogas</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={pendulo} width="120px"></img>
                <h4 id="nameservice">Péndulo</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={reiki} width="120px"></img>
                <h4 id="nameservice">Reiki</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={rituales} width="120px"></img>
                <h4 id="nameservice">Rituales</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={runas} width="120px"></img>
                <h4 id="nameservice">Runas</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={sanadora} width="120px"></img>
                <h4 id="nameservice">Sanadora</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={sensitiva} width="120px"></img>
                <h4 id="nameservice">Sensitiva</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={vidente} width="120px"></img>
                <h4 id="nameservice">Vidente</h4>
            </div>

            <div id="miniservicio">
                <img id="imgserv" alt="Servicio" src={bola} width="120px"></img>
                <h4 id="nameservice">Bola de cristal</h4>
            </div>

            </div>
                
        </section>
    );
}