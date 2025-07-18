import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center w-full flex-1 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Bienvenido al Frontend del Parcial Práctico</h1>
      <p className="mb-6">Administra pedidos fácilmente, mediante dos versiones.</p>
      <div className="flex gap-4 flex-col ">
          <p className='font-bold text-slate-950'>Integrantes</p>
          <p>Santiago Trespalacios Bolivar</p>  
          <p>Juan Diego Duque Jimenez</p>  
          <p>David Gomez Agudelo</p>  
      </div>        
    </div>
  );
}

