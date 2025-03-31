"use client"

import { useState } from "react"
import { Calendar, MapPin, Mountain, Menu, X } from "lucide-react"
import { Link } from "react-router-dom";
import routes from "../../public/routes";
import "./landing.css"

const AlmaDeMontana = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const monthlyRoutes =routes 

  return (
    <div className="Conten">
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
            <a href="#mision">Misión y Visión</a>           
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
              <a href="#mision" onClick={toggleMenu}>
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
          Quienes Somos
        </h2>
        <p className="section-text">
          Somos una familia unida por la pasión por la naturaleza. Caminamos por los senderos no solo para explorar, sino para conectar, reflexionar y renovar nuestra energía. En cada paso, vemos la oportunidad de cuidar, proteger y celebrar la tierra que nos acoge. Nuestro amor por la naturaleza nos impulsa a compartir este viaje con todos aquellos que deseen descubrir, con respeto y gratitud, la belleza que se esconde en cada rincón del mundo natural.
        </p>
        <p className="section-text">
          En nuestra comunidad, cada caminata es un acto de amor hacia la madre tierra. Creemos firmemente que el senderismo no solo es un deporte, sino una forma de vida consciente que nos invita a reflexionar sobre nuestro impacto y la necesidad urgente de preservar el entorno para las generaciones futuras. Al unirnos como familia de senderistas, queremos inspirar a más personas a descubrir el senderismo como una forma de cuidar de sí mismos mientras cuidan del mundo que los rodea. No es solo caminar; es una manera de despertar nuestra conciencia, apreciar lo que tenemos y, lo más importante, protegerlo.
        </p>
        <p className="section-text">
          Si eres amante de la naturaleza y deseas formar parte de un grupo que pone en primer plano el respeto por la tierra, te invitamos a unirte a nuestra familia de senderistas. Juntos, recorreremos senderos, descubriremos nuevos horizontes y, sobre todo, aprenderemos a amar y cuidar este planeta que es nuestra casa. ¡El viaje empieza hoy!
        </p>
      </div>
    </div>
  </div>
      </section>


      {/* Mission & Vision Section */}
      <section className="mission-vision" id="mision">
        <div className="container">
          <div className="mission-vision-grid">
            {/* Mission */}
            <div  className="mission-card">
              <h2 className="section-title">
                <span className="icon-bg">
                  <Mountain className="h-6 w-6" style={{ color: "#4d7c0f" }} />
                </span>
                Nuestra Misión
              </h2>
              <p className="section-text">
              En Alma de Montaña, no solo recorremos senderos, 
              abrazamos la naturaleza y transformamos vidas. 
              Somos una familia de aventureros apasionados por la montaña, 
              que encuentra en cada caminada una oportunidad para sanar el cuerpo, 
              despejar la mente y alimentar el alma. Creemos que el contacto con 
              la naturaleza es una de las formas más poderosas de liberar el estrés, 
              fortalecer la salud y reconectar con lo esencial. 
              Más que un deporte, promovemos un estilo de vida consciente, donde el respeto 
              y el amor por la naturaleza nos guían en cada paso.
              </p>
              <p className="section-text">
                Nos comprometemos a fomentar una comunidad de amantes del aire libre que respetan y protegen el medio
                ambiente mientras disfrutan de sus maravillas.
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
              Ser la comunidad de senderismo más apasionada, 
              donde cada persona descubra que la montaña no es solo un destino, 
              sino un camino hacia el bienestar y la plenitud. 
              Queremos inspirar a más personas a salir de la rutina, 
              descubrir la belleza de la naturaleza y entender que caminar por 
              los senderos es más que una actividad física: es una inversión en su salud, 
              en su paz mental y en su felicidad. En Alma de Montaña, creemos que amar la 
              montaña es también protegerla, por eso fomentamos el respeto y la conservación 
              de cada lugar que exploramos, asegurando que futuras generaciones puedan seguir 
              encontrando en ella su refugio y su energía.
              </p>
              <p className="section-text">
                Visualizamos un mundo donde más personas descubran los beneficios físicos, mentales y espirituales de
                conectar con la naturaleza a través del senderismo.
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
                <a href="#">Facebook</a>
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

