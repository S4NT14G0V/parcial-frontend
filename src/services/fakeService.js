// simulación delay para imitar llamada fetch
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// datos fake para pedidos
const mockOrders = [
  {
    id: '1',
    status: 'Ingresado',
    customerName: 'Juan Pérez',
    deliveryAddress: 'Calle Falsa 123',
    estimatedDelivery: '2025-07-18T19:30:00',
  },
  {
    id: '2',
    status: 'En procesamiento',
    customerName: 'María Gómez',
    deliveryAddress: 'Av. Siempre Viva 742',
    estimatedDelivery: '2025-07-18T20:00:00',
  },
  {
    id: '3',
    status: 'Despachado',
    customerName: 'Carlos Ruiz',
    deliveryAddress: 'Paseo Colón 456',
    estimatedDelivery: '2025-07-18T18:45:00',
  },
];

export const getOrderById = async (id) => {
  await delay(500); // simula retardo de red
  const order = mockOrders.find((o) => o.id === id);
  if (!order) {
    throw new Error(`Pedido con id ${id} no encontrado`);
  }
  return order;
};

export const createOrder = async (data) => {
  await delay(700);
  // simula crear id nuevo y retornar datos con id
  const newOrder = {
    id: (mockOrders.length + 1).toString(),
    status: 'Ingresado',
    estimatedDelivery: new Date(Date.now() + 3600 * 1000).toISOString(), // +1h
    ...data,
  };
  mockOrders.push(newOrder);
  return newOrder;
};

export const getAllOrders = async () => {
  await delay(500);
  return mockOrders;
};
