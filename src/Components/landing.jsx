"use client"

import { useState } from "react"
import { Calendar, MapPin, Mountain, Menu, X } from "lucide-react"
import "./landing.css"

const AlmaDeMontana = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const monthlyRoutes = [
    {
      id: 1,
      name: "Sendero del Valle",
      date: "5 de Mayo, 2025",
      difficulty: "Moderada",
      duration: "4 horas",
      location: "Valle Verde",
    },
    {
      id: 2,
      name: "Cumbre del Águila",
      date: "12 de Mayo, 2025",
      difficulty: "Difícil",
      duration: "7 horas",
      location: "Sierra Alta",
    },
    {
      id: 3,
      name: "Cascada Escondida",
      date: "19 de Mayo, 2025",
      difficulty: "Fácil",
      duration: "3 horas",
      location: "Bosque Azul",
    },
    {
      id: 4,
      name: "Mirador del Cóndor",
      date: "26 de Mayo, 2025",
      difficulty: "Moderada",
      duration: "5 horas",
      location: "Montañas del Este",
    },
  ]

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
            <a href="#mision">Misión</a>
            <a href="#vision">Visión</a>
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
              <a href="#mision" onClick={toggleMenu}>
                Misión
              </a>
              <a href="#vision" onClick={toggleMenu}>
                Visión
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
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Explora la Naturaleza con Nosotros</h1>
          <p>Descubre senderos, montañas y paisajes increíbles en compañía de otros amantes de la naturaleza.</p>
          <button className="hero-button">Únete a Nosotros</button>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            {/* Mission */}
            <div id="mision" className="mission-card">
              <h2 className="section-title">
                <span className="icon-bg">
                  <Mountain className="h-6 w-6" style={{ color: "#4d7c0f" }} />
                </span>
                Nuestra Misión
              </h2>
              <p className="section-text">
                En Alma de Montaña, nuestra misión es conectar a las personas con la naturaleza a través de experiencias
                de senderismo seguras, educativas y enriquecedoras.
              </p>
              <p className="section-text">
                Nos comprometemos a fomentar una comunidad de amantes del aire libre que respetan y protegen el medio
                ambiente mientras disfrutan de sus maravillas.
              </p>
            </div>

            {/* Vision */}
            <div id="vision" className="vision-card">
              <h2 className="section-title">
                <span className="icon-bg">
                  <Mountain className="h-6 w-6" style={{ color: "#4d7c0f" }} />
                </span>
                Nuestra Visión
              </h2>
              <p className="section-text">
                Aspiramos a ser el grupo de senderismo líder, reconocido por nuestro compromiso con la conservación
                ambiental y por crear experiencias transformadoras en la naturaleza.
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
                <div className="route-image"></div>
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
              </div>
            ))}
          </div>

          <button className="view-all-button">Ver Todas las Rutas</button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="container">
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
              <p>Email: info@almademontana.com</p>
              <p>Teléfono: +123 456 7890</p>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
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

