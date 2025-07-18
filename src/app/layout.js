import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '@/components/navbar';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Parcial Práctico",
  description: "Parcial práctico sobre pedidos de restaurante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full">
      <body className="bg-gray-100 text-gray-900 flex flex-col m-0 p-0 box-border min-h-full">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
