"use client"

import { useState } from "react"
import "./whatsapp.css"

export default function WhatsAppButton({ phoneNumber, message = "Hola, podrias darme informacion sobre la ruta de este mes." }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div
      className="whatsapp-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <div className="whatsapp-tooltip">Chatea con nosotros</div>}
      <button onClick={handleClick} className="whatsapp-button" aria-label="Chat on WhatsApp">
        <i className="bi bi-whatsapp"></i>
      </button>
    </div>
  )
}

