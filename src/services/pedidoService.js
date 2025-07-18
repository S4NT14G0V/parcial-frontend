import { apiConfigV1,apiConfigV2 } from '@/config/apiConfig';

export const getOrderById = async (id) => {
  const res = await fetch(`${apiConfigV1.baseUrl}/orders/${id}`, {
    headers: apiConfigV1.headers,
    cache: 'no-store'
  });
  console.log("result: ", res);

  if (!res.ok) {
    throw new Error(`Error al obtener pedido: ${res.statusText}`);
  }

  return await res.json();
};

export const createOrder = async (data) => {
  const res = await fetch(`${apiConfigV1.baseUrl}/orders`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
  console.log("result: ", res);

  if (!res.ok) {
    throw new Error(`Error al crear pedido: ${res.statusText}`);
  }

  return await res.json();
};

export const getAllOrders = async () => {
  const res = await fetch(`${apiConfigV1.baseUrl}/orders`, {
    headers: apiConfigV1.headers,
    cache: 'no-store',
  });
  console.log("result: ", res);

  if (!res.ok) {
    throw new Error(`Error al obtener pedidos: ${res.statusText}`);
  }

  const data = await res.json();
  console.log("Pedidos recibidos del backend:", data);

  return data;
};



export const getAllOrders2 = async () => {
  const res = await fetch(`${apiConfigV2.baseUrl}/orders`, {
    headers: apiConfigV2.headers,
    cache: 'no-store',
  });
  console.log("result: ", res);

  if (!res.ok) {
    throw new Error(`Error al obtener pedidos: ${res.statusText}`);
  }

  const data = await res.json();
  console.log("Pedidos recibidos del backend:", data);

  return data;
};