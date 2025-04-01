"use client"

import { useState, useEffect } from "react"
import axios from "axios" // Importa Axios
import { X } from "lucide-react"
// Importa el archivo CSS
import "./modal.css"

// Componente de modal de registro
function RegistrationModal({ routeName }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    documentType: "",
    documentNumber: "",
    firstName: "",
    contactNumber: "", 
    eps: "",
    bloodType: "",
    contactPerson: "",
    contactPersonNumber: "",
    customProp: routeName 
  })

  // Desactivar y activar el scroll del body
  useEffect(() => {
    if (isOpen) {
      // Desactiva el scroll
      document.body.style.overflow = "hidden"
    } else {
      // Reactiva el scroll
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Función para manejar la apertura del modal
  const openModal = () => {
    setIsOpen(true)
  }

  // Función para cerrar el modal
  const onClose = () => {
    setIsOpen(false)
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSelectChange = (e) => {
    handleChange("documentType", e.target.value)
  }

  // Función para enviar los datos al servidor
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:3001/api/register", formData)
      console.log("Datos enviados correctamente:", response.data)
      
      // Cerrar el modal al enviar los datos
      setIsOpen(false)
    } catch (error) {
      console.error("Error al enviar los datos:", error)
      alert("Hubo un error al enviar los datos. Inténtalo de nuevo.")
    }
  }

  if (!isOpen) return (
    <button onClick={openModal} className="btn-inscribirse">
      Incribirse
    </button>
  )

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-card">
          <div className="modal-header">
            <h2 className="modal-title">Registro</h2>
            <button onClick={onClose} className="modal-close-button" aria-label="Cerrar">
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-scroll-container">
              <div className="modal-content">
                <div className="form-group">
                  <label htmlFor="documentType" className="form-label">
                    Documento de identidad
                  </label>
                  <select
                    id="documentType"
                    className="form-select"
                    value={formData.documentType}
                    onChange={handleSelectChange}
                    required // Agregado el atributo 'required'
                  >
                    <option value="" disabled>
                      Seleccione tipo de documento
                    </option>
                    <option value="cedula">Cédula</option>
                    <option value="tarjeta_identidad">Tarjeta Identidad</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="documentNumber" className="form-label">
                    Número documento
                  </label>
                  <input
                    id="documentNumber"
                    className="form-input"
                    type="number"
                    value={formData.documentNumber}
                    onChange={(e) => handleChange("documentNumber", e.target.value)}
                    placeholder="Ingrese su número de documento"
                    required // Agregado el atributo 'required'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    Nombre completo
                  </label>
                  <input
                    id="firstName"
                    className="form-input"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    placeholder="Ingrese su nombre completo"
                    required // Agregado el atributo 'required'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactNumber" className="form-label">
                    Celular / WhatsApp
                  </label>
                  <input
                    id="contactNumber"
                    className="form-input"
                    type="number"
                    value={formData.contactNumber}
                    onChange={(e) => handleChange("contactNumber", e.target.value)}
                    placeholder="Ingrese su número de celular o WhatsApp"
                    required // Agregado el atributo 'required'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eps" className="form-label">
                    EPS
                  </label>
                  <input
                    id="eps"
                    className="form-input"
                    type="text"
                    value={formData.eps}
                    onChange={(e) => handleChange("eps", e.target.value)}
                    placeholder="Ingrese su EPS"
                    required // Agregado el atributo 'required'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="bloodType" className="form-label">
                    RH
                  </label>
                  <input
                    id="bloodType"
                    className="form-input"
                    type="text"
                    value={formData.bloodType}
                    onChange={(e) => handleChange("bloodType", e.target.value)}
                    placeholder="Ingrese su tipo de sangre"
                    required // Agregado el atributo 'required'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactPerson" className="form-label">
                    Persona de contacto
                  </label>
                  <input
                    id="contactPerson"
                    className="form-input"
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => handleChange("contactPerson", e.target.value)}
                    placeholder="Ingrese nombre de persona de contacto"
                    required // Agregado el atributo 'required'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactPersonNumber" className="form-label">
                    Número de contacto de esa persona
                  </label>
                  <input
                    id="contactPersonNumber"
                    className="form-input"
                    type="number"
                    value={formData.contactPersonNumber}
                    onChange={(e) => handleChange("contactPersonNumber", e.target.value)}
                    placeholder="Ingrese número de contacto de persona"
                    required // Agregado el atributo 'required'
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="submit-button">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Exportación explícita del componente
export default RegistrationModal
