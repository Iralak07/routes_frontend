import React, { useState } from 'react';
import '../styles/formulario.css';

interface FormData {
  nombreCliente: string;
  demanda: number;
  ubicacion: string;
  telefono: string;
}

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombreCliente: '',
    demanda: 0,
    ubicacion: '',
    telefono: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí puedes agregar la lógica para enviar los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombreCliente">Nombre del Cliente:</label>
        <input
          type="text"
          id="nombreCliente"
          name="nombreCliente"
          value={formData.nombreCliente}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="demanda">Demanda (kg):</label>
        <input
          type="number"
          id="demanda"
          name="demanda"
          value={formData.demanda}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="ubicacion">Ubicación:</label>
        <input
          type="text"
          id="ubicacion"
          name="ubicacion"
          value={formData.ubicacion}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
