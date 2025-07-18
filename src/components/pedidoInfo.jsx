export default function OrderInfo({ order }) {
  return (
    <div className="p-5 rounded-2xl shadow-md bg-slate-50 border border-slate-300 hover:shadow-md transition-all duration-300 relative">
      <span className="text-xl text-slate-800/40 mb-2 absolute top-3 right-3">{order.id}</span>

      <div className="text-slate-700 space-y-1">
        <p><span className="font-semibold text-sm">Cliente:</span> {order.customerName}</p>
        <p><span className="font-semibold text-sm">Dirección:</span> {order.deliveryAddress}</p>
        <p className="flex items-center gap-2 ">
          <span className="font-semibold text-sm">Estado:</span>
          <span className="px-2 py-0.5 rounded-full text-sm bg-blue-200 text-slate-800">
            {order.status}
          </span>
        </p>
        <p>
          <span className="font-semibold text-sm">Entrega estimada:</span>{' '}
          {new Date(order.estimatedDelivery).toLocaleString('es-CO', {
            weekday: 'short',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            day: '2-digit',
            month: 'short',
          })}
        </p>
      </div>
    </div>
  );
}
