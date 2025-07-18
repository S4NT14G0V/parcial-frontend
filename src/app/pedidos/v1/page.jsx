import { getAllOrders } from '@/services/pedidoService';
import OrderInfo from '@/components/pedidoInfo';

export default async function OrdersPage() {
  const pedidos = await getAllOrders();

  return (
    <main className="p-8 space-y-4 h-full">
      <h1 className="text-2xl font-bold text-slate-800">Pedidos Actuales</h1>
      {pedidos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pedidos.map((pedido) => (
            <OrderInfo key={pedido.id} order={pedido} />
          ))}
        </div>
      ) : (
        <p className="text-slate-600">No hay pedidos disponibles.</p>
      )}
    </main>
  );
}
