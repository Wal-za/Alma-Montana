"use client"

import { useState } from "react"
import { Calendar, MapPin, Mountain, Menu, X } from "lucide-react"
import { Link } from "react-router-dom";
import routes from "/public/routes.js";
import Whatsapp from './whatsapp'; 
import "./landing.css"

const AlmaDeMontana = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const monthlyRoutes =routes 

  return (
    <div className="Conten">
      <Whatsapp phoneNumber="+573194969983" />
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <div> 
                <img src="./logo.png" className="logo-img"  alt="Alma de Montaña"/>
            </div>
            <span className="logo-text">Alma de Montaña</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#inicio">Inicio</a>
            <a href="#quienes-somos"> Quienes Somos</a>  
            <a href="#mision-y-vision">Misión y Visión</a>           
            <a href="#rutas">Rutas del Mes</a>
            <a href="#contacto">Contacto</a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-container">
              <a href="#inicio" onClick={toggleMenu}>
                Inicio
              </a>
              <a href="#quienes-somos" onClick={toggleMenu}>
              Quienes Somos
              </a>
              <a href="#mision-y-vision" onClick={toggleMenu}>
                Misión
              </a>             
              <a href="#rutas" onClick={toggleMenu}>
                Rutas del Mes
              </a>
              <a href="#contacto" onClick={toggleMenu}>
                Contacto
              </a>
            </div>
          </div>
        )}
      </header>

     {/* Hero Section */}
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div> {/* Capa para hacer el texto legible */}
      <div className="hero-content">
        <div className="hero-text-container">
          <h1>Conéctate con la Naturaleza: Vive la Aventura del Senderismo</h1>
          <p>Únete a nuestra familia de senderistas y disfruta de experiencias únicas en la naturaleza.</p>
          {/* Botón de llamada a la acción */}
          <a href="#rutas" className="cta-button">Descubre nuestras rutas</a>
        </div>
      </div>
    </section>

    {/* Quines somos */}
    <section className="mission-vision" id="quienes-somos">
  <div className="container">
    <div className="mission-card">
      {/* Título de la sección con ícono */}
      <h2 className="section-title">
        <span className="icon-bg">
          <Mountain className="h-6 w-6" style={{ color: "#4d7c0f" }} />
        </span>
        ¿Quiénes Somos?
      </h2>
      {/* Descripción */}
      <div className="section-content">
  <p className="section-text">
    Somos una familia unida por la pasión por la naturaleza. Cada caminata es una oportunidad para conectarnos con el entorno, reflexionar y renovar nuestras energías. Pero también, a través del senderismo, descubrimos la riqueza de los pueblos que encontramos en nuestro camino, compartiendo momentos con sus gentes y aprendiendo de su forma de vida, profundamente conectada con la tierra.
  </p>
  <p className="section-text">
    Creemos que el senderismo es mucho más que un deporte: es una manera de vivir conscientemente, un espacio para disfrutar de la naturaleza, pero también para conocer las historias de aquellos que preservan el alma de sus comunidades. Cada paso nos invita a reflexionar sobre nuestro impacto y a celebrar la cultura local, en un intercambio sincero con quienes cuidan de sus tierras y tradiciones.
  </p>
  <p className="section-text">
    Si amas la naturaleza y buscas una forma auténtica de explorar el mundo, ven a caminar con nosotros. Juntos recorreremos senderos, descubriremos pueblos pintorescos, y compartiremos vivencias con las personas que los habitan. Aprenderemos a cuidar de nuestro hogar, el planeta, y a conectar con sus habitantes de una forma que va más allá de lo superficial. ¡El viaje empieza hoy!
  </p>
</div>

      {/* Botón de llamada a la acción */}
      <div className="cta-container">
        <a href="#rutas" className="cta-button">Únete a nuestras rutas</a>
      </div>
    </div>
  </div>
    </section>

     {/* Mission & Vision Section */}
<section className="mission-vision" id="mision-y-vision">
  <div className="container">
    <div className="mission-vision-grid">
      {/* Misión y Visión combinadas */}
      <div className="mission-card">
        <h2 className="section-title">
          <span className="icon-bg">
            <Mountain className="h-6 w-6" style={{ color: "#4d7c0f" }} />
          </span>
          Nuestra Misión y Visión
        </h2>
        <div className="section-content">
          <p className="section-text">
            En Alma de Montaña no solo caminamos por senderos, sino que buscamos vivir de manera consciente, conectándonos con la naturaleza y con las personas de los pueblos que encontramos en el camino. Cada paso es una oportunidad para renovar nuestra energía, compartir experiencias y aprender de quienes cuidan sus tierras y tradiciones. Creemos que el senderismo es más que una actividad física: es un viaje hacia el bienestar, donde cada sendero nos enseña a respetar el medio ambiente y a construir vínculos auténticos con las comunidades locales.
          </p>
          <p className="section-text">
            Nuestra visión es ser una comunidad activa que no solo recorre montañas, sino que también se involucra en la conservación de los lugares que exploramos. Queremos inspirar a más personas a dejar atrás la rutina, a conocer la belleza de la naturaleza y las historias de quienes habitan los pueblos, aprendiendo juntos a cuidar nuestro hogar: el planeta. Visualizamos un mundo donde caminar por los senderos no solo sea un ejercicio físico, sino una forma de conexión profunda con la naturaleza y la humanidad.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Monthly Routes Section */}
      <section id="rutas" className="routes-section">
        <div className="container">
          <div className="section-header">
            <h2>Rutas del Mes</h2>
            <p>Únete a nuestras próximas aventuras y descubre nuevos senderos con nosotros.</p>
          </div>

          <div className="routes-grid">
            {monthlyRoutes.map((route) => (
              <div key={route.id} className="route-card">
                <div className="route-image">
                <img src={route.img} alt={route.name} />
                </div>
                <div className="route-content">
                  <h3 className="route-title">{route.name}</h3>
                  <div className="route-info">
                    <Calendar className="h-4 w-4" />
                    <span>{route.date}</span>
                  </div>
                  <div className="route-info">
                    <MapPin className="h-4 w-4" />
                    <span>{route.location}</span>
                  </div>
                  <div className="route-footer">
                    <span className="route-difficulty">{route.difficulty}</span>
                    <span className="route-duration">{route.duration}</span>
                  </div>
                </div>
                <div className="route-detalles">             
              <Link to={`/route/${route.id}`}>
                <button>Ver detalles</button>
              </Link>
            </div>
              </div>
            ))}
          </div>
      
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="container footercontainer">
          <div className="footer-container">
            <div>
              <div className="footer-logo">
                <Mountain className="h-8 w-8" style={{ color: "#fcf6af" }} />
                <span className="footer-logo-text">Alma de Montaña</span>
              </div>
              <p className="footer-description">
                Conectando personas con la naturaleza a través de experiencias de senderismo inolvidables.
              </p>
            </div>

            <div className="footer-contact">
              <h3 className="footer-title">Contacto</h3>              
              <a href="https://wa.me/573194969983" class="whatsapp-link" target="_blank">Whatsapp 3194969983</a>

              <div className="social-links">
                <a href="https://www.facebook.com/groups/926241216288674/?ref=share&mibextid=NSMWBT" target="_blank">Facebook</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Alma de Montaña. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AlmaDeMontana

