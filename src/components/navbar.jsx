"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isExact = (path) => pathname === path;
  const startsWith = (path) => pathname.startsWith(path);

  return (
    <nav className="w-full bg-white/20 backdrop-blur-md shadow-md top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-8 px-6 py-4">
        {/* Grupo V1 */}
        <div className="flex gap-4 border-2 border-slate-950/20 rounded-md p-2">
          <Link
            href="/pedidos/v1"
            className={isExact("/pedidos/v1") ? "bg-slate-950/90 text-white p-2 rounded-md" : "text-slate-950/90 hover:bg-slate-800 hover:text-white transition-colors p-2 rounded-md"}
          >
            Pedidos v1
          </Link>
          <Link
            href="/pedidos/v1/add"
            className={startsWith("/pedidos/v1/add") ? "bg-slate-950/90 text-white p-2 rounded-md" : "text-slate-950/90 hover:bg-slate-800 hover:text-white transition-colors p-2 rounded-md"}
          >
            Nuevo Pedido v1
          </Link>
        </div>

        {/* Grupo V2 */}
        <div className="flex gap-4 border-2 border-slate-950/20 rounded-md p-2">
          <Link
            href="/pedidos/v2"
            className={isExact("/pedidos/v2") ? "bg-slate-950/90 text-white p-2 rounded-md" : "text-slate-950/90 hover:bg-slate-800 hover:text-white transition-colors p-2 rounded-md"}
          >
            Pedidos v2
          </Link>
          <Link
            href="/pedidos/v2/add"
            className={startsWith("/pedidos/v2/add") ? "bg-slate-950/90 text-white p-2 rounded-md" : "text-slate-950/90 hover:bg-slate-800 hover:text-white transition-colors p-2 rounded-md"}
          >
            Nuevo Pedido v2
          </Link>
        </div>
      </div>
    </nav>
  );
}
