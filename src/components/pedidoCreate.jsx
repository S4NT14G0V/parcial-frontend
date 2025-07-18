'use client';
import { useState } from 'react';
import { createOrder } from '@/services/fakeService';

export default function OrderCreate() {
  const [formData, setFormData] = useState({
    address: '',
    date: '',
    status: 'pendiente'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const data = {
        status: formData.status,
        user: null, 
        address: formData.address,
        date: formData.date
      };

      const res = await createOrder(data);
      alert(`Pedido creado con ID: ${res.id}`);
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-300 rounded-2xl shadow-md p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">Nuevo Pedido</h1>

      <div className="space-y-4">
        <input
          className="w-full p-3 border border-slate-300 rounded-lg"
          placeholder="Dirección de Entrega"
          name="address"
          onChange={handleChange}
        />
        <input
          className="w-full p-3 border border-slate-300 rounded-lg"
          placeholder="Fecha y hora de entrega (ISO ej: 2025-07-18T20:00:00)"
          name="date"
          onChange={handleChange}
        />
        <select
          className="w-full p-3 border border-slate-300 rounded-lg bg-white"
          name="status"
          onChange={handleChange}
          defaultValue="pendiente"
        >
          <option value="pendiente">Pendiente</option>
          <option value="en preparación">En preparación</option>
          <option value="en camino">En camino</option>
          <option value="entregado">Entregado</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar Pedido
        </button>
      </div>
    </div>
  );
}
