import React, { useState, useEffect } from "react";
import { Mountain } from "lucide-react";
import { useParams } from "react-router-dom"; 
import Inscribirse from "./modal";
import "./ruta.css"; 
import routes from "/public/routes.js";
import Whatsapp from './whatsapp'; 

const RouteDetails = () => {
  const { id } = useParams(); // Obtener el id de la URL
  const [routeData, setRouteData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Buscar la ruta que coincida con el id
    const route = routes.find((route) => route.id == id);
    if (route) {
      setRouteData(route);
      setLoading(false);
    } else {
      setLoading(false);
      setRouteData(null);
    }
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (!routeData) return <div>No se encontró la ruta.</div>;

  return (
    <div className="route-details">
      <Whatsapp phoneNumber="+573194969983" />
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <img src="/logo.png" className="logo-img" alt="Alma de Montaña"/>
            <span className="logo-text">Alma de Montaña</span>
          </div>
        </div>
      </header>

      <div className="contenedor-rutas">
        {/* Mapa y Altimetría */}
        <h2>{routeData.name}</h2>

        <div className="map">
          <div className="imgmap">          
            <h3>Mapa:</h3>
            <img src={routeData.mapImage} alt="Mapa de la Ruta" />
          </div>

          {/* Imagen de Altimetría */}
          {routeData.altitudeProfileImage && (
            <div className="altimetry">
              <h3>Altimetría:</h3>
              <img
                src={routeData.altitudeProfileImage}
                alt="Altimetría de la Ruta"
                className="altimetria"
              />
            </div>
          )}
        </div>

        <p>
          <strong>Fecha:</strong> {routeData.date}
        </p>
        <p>
          <strong>Punto de encuentro:&nbsp;&nbsp;&nbsp; </strong> {routeData.meetingTime} – {routeData.meetingPoint}
        </p>
        <p>
          <strong>Distancia:</strong> {routeData.duration}
        </p>
        <p>
          <strong>Altura máxima:</strong> {routeData.maxAltitude}
        </p>
        <p>
          <strong>Dificultad:</strong> {routeData.difficulty}
        </p>

        <div className="description">
          <h3>Descripción</h3>
          <p>{routeData.description}</p>
        </div>

        <div className="included">
          <h3>Incluye:</h3>
          <ul>
            {routeData.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Sección de Valor modificada */}
        <div className="weather">
          <h3>Clima:</h3>
          <p>
            <strong>Temperatura promedio:</strong> {routeData.temperature}
          </p>
          <p>
            <strong>Clima:</strong> {routeData.climate}
          </p>
        </div>

        <div className="itinerary">
          <h3>Itinerario:</h3>
          <ul>
            {routeData.itinerary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="attractions">
          <h3>Atractivos:</h3>
          <ul>
            {routeData.attractions.map((attraction, index) => (
              <li key={index}>{attraction}</li>
            ))}
          </ul>
        </div>

        <div className="recommendations">
          <h3>Recomendaciones:</h3>
          <ul>
            {routeData.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Imágenes de la Ruta:</h3>
          <div className="images">
            {routeData.images.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
          </div>               
        </div>
         
         {/* Sección añadida para recordar el cuidado del medio ambiente */}
        <div className="environmental-care">
          <h3>Que no quede Huella</h3>
          <p>{routeData.environmentalCareMessage}</p>
        </div>

        {/* Video de YouTube */}
        <div className="video">
          <h3>Video:</h3>
          <iframe
            width="560"
            height="315"
            src={routeData.videoUrl} 
            title="Video de la Ruta"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="creditos">Créditos: <a href={routeData.videoPageUrl} target="_blank" rel="noopener noreferrer">{routeData.videoCreator}</a></p>
        </div>

        <div className="price">
          <h3>Inversion:</h3>
          <p>
            {routeData.price.withoutLunch}
          </p>
        </div>     

        {/*<Inscribirse routeName={routeData.id} />*/}
      </div>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="container footercontainer">
          <div className="footer-container">
            <div>
              <div className="footer-logo">
                <Mountain className="h-8 w-8" style={{ color: "#fcf6af" }} />
                <span className="footer-logo-text">Alma de Montaña</span>
              </div>
              <p className="footer-description white">
                Conectando personas con la naturaleza a través de experiencias de senderismo inolvidables.
              </p>
            </div>

            <div className="footer-contact">
              <h3 className="footer-title white">Contacto</h3>
              <a href="https://wa.me/573194969983" className="whatsapp-link" target="_blank">
                Whatsapp 3194969983
              </a>

              <div className="social-links">
                <a href="https://www.facebook.com/groups/926241216288674/?ref=share&mibextid=NSMWBT" target="_blank">Facebook</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="white">&copy; {new Date().getFullYear()} Alma de Montaña. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RouteDetails;
