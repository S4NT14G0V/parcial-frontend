import { getAllOrders2 } from '@/services/pedidoService';
import OrderInfo from '@/components/pedidoInfo';

export default async function OrdersPage() {
  const pedidos = await getAllOrders2();

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Pedidos Actuales</h1>
      {pedidos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pedidos.map((pedido) => (
            <OrderInfo key={pedido.id} order={pedido} />
          ))}
        </div>
      ) : (
        <p>No hay pedidos disponibles.</p>
      )}
    </main>
  );
}
