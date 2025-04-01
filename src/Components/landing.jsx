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
        <div className="relleno"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div>  
            <h1>Explora la Naturaleza con Nosotros</h1>
            <p>Descubre senderos, montañas y paisajes increíbles en compañía de otros amantes de la naturaleza.</p>
           
          </div>
        </div>
      </section>

      <section className="mission-vision" id="quienes-somos">
  <div className="container">
    <div className="">
      {/* Quienes Somos */}
      <div className="mission-card">
  <h2 className="section-title">
    <span className="icon-bg">
      <Mountain className="h-6 w-6" style={{ color: "#4d7c0f" }} />
    </span>
    ¿Quiénes Somos?
  </h2>
  <p className="section-text">
    Somos una familia unida por la pasión por la naturaleza. Caminamos para conectarnos, reflexionar y renovar nuestra energía, cuidando y celebrando la tierra que nos acoge. 
  </p>
  <p className="section-text">
    Creemos que el senderismo es mucho más que un deporte: es una forma de vida consciente. Cada paso nos invita a reflexionar sobre nuestro impacto y a preservar el planeta para las futuras generaciones.
  </p>
  <p className="section-text">
    Si amas la naturaleza y quieres unirte a un grupo que pone la tierra en primer lugar, ven a caminar con nosotros. Juntos descubriremos nuevos horizontes y aprenderemos a cuidar de nuestro hogar: el planeta. ¡El viaje empieza hoy!
  </p>
</div>

    </div>
  </div>
      </section>


      {/* Mission & Vision Section */}
      <section className="mission-vision" id="mision-y-vision">
        <div className="container">
          <div className="mission-vision-grid">
            {/* Mission */}
            <div className="mission-card">
            <h2 className="section-title">
              <span className="icon-bg">
                <Mountain className="h-6 w-6" style={{ color: "#4d7c0f" }} />
              </span>
              Nuestra Misión
            </h2>
            <p className="section-text">
              En Alma de Montaña no solo caminamos por senderos, sino que abrazamos la naturaleza para transformar nuestras vidas. Somos una familia de aventureros que encuentra en cada paso una oportunidad para sanar, despejar la mente y alimentar el alma. Creemos que la naturaleza es la clave para liberar el estrés, fortalecer la salud y reconectar con lo esencial.
            </p>
            <p className="section-text">
              Promovemos un estilo de vida consciente, donde el respeto y amor por la naturaleza guían cada uno de nuestros pasos. Juntos, somos una comunidad que disfruta de la montaña mientras protege nuestro entorno.
            </p>
          </div>


            {/* Vision */}
            <div className="vision-card">
            <h2 className="section-title">
              <span className="icon-bg">
                <Mountain className="h-6 w-6" style={{ color: "#4d7c0f" }} />
              </span>
              Nuestra Visión
            </h2>
            <p className="section-text">
              Queremos ser la comunidad de senderismo más apasionada, donde cada persona descubra que la montaña es mucho más que un destino; es un camino hacia el bienestar y la plenitud. Buscamos inspirar a más personas a dejar la rutina, explorar la naturaleza y entender que caminar por los senderos es una inversión en su salud, paz mental y felicidad.
            </p>
            <p className="section-text">
              En Alma de Montaña, creemos que amar la montaña es también protegerla, por eso promovemos el respeto y la conservación de cada lugar que exploramos. Visualizamos un mundo donde más personas se conecten con la naturaleza y experimenten sus beneficios físicos, mentales y espirituales.
            </p>
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

