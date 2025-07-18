import { getOrderById } from '@/services/pedidoService';
import OrderInfo from '@/components/pedidoInfo';

export default async function OrderByIdPage({ params }) {
  const pedido = await getOrderById(params.id);

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Detalle del Pedido #{pedido.id}</h1>
      <OrderInfo order={pedido} />
    </main>
  );
}
