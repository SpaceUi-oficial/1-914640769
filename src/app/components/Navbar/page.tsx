"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="bg-[#1416187e] fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center relative group">
        <div className="flex space-x-8 relative">
          {/* Enlaces de la Navbar */}
          <Link
            href="/"
            title="Inicio"
            className="text-white text-sm hover:underline h-full"
            onMouseEnter={() => setHovered("home")}
            onMouseLeave={() => setHovered(null)}
          >
            Inicio
          </Link>
          <Link
            href="/"
            title="Productos"
            className="text-white text-sm hover:underline"
            onMouseEnter={() => setHovered("productos")}
            onMouseLeave={() => setHovered(null)}
          >
            Productos
          </Link>
          <Link
            href="/"
            title="Servicios"
            className="text-white text-sm hover:underline"
            onMouseEnter={() => setHovered("servicios")}
            onMouseLeave={() => setHovered(null)}
          >
            Servicios
          </Link>
          <Link
            href="/"
            title="Acerca de"
            className="text-white text-sm hover:underline"
            onMouseEnter={() => setHovered("acerca-de")}
            onMouseLeave={() => setHovered(null)}
          >
            Acerca de
          </Link>
          <Link
            href="/"
            title="Contacto"
            className="text-white text-sm hover:underline"
            onMouseEnter={() => setHovered("contacto")}
            onMouseLeave={() => setHovered(null)}
          >
            Contacto
          </Link>
          <Link
            href="/"
            title="Blog"
            className="text-white text-sm hover:underline"
            onMouseEnter={() => setHovered("blog")}
            onMouseLeave={() => setHovered(null)}
          >
            Blog
          </Link>
          <Link
            href="/"
            title="Soporte"
            className="text-white text-sm hover:underline"
            onMouseEnter={() => setHovered("soporte")}
            onMouseLeave={() => setHovered(null)}
          >
            Soporte
          </Link>
          <Link
            href="/"
            title="FAQ"
            className="text-white text-sm hover:underline"
            onMouseEnter={() => setHovered("faq")}
            onMouseLeave={() => setHovered(null)}
          >
            FAQ
          </Link>
          <Link
            href="/"
            title="Testimonios"
            className="text-white text-sm hover:underline"
            onMouseEnter={() => setHovered("testimonios")}
            onMouseLeave={() => setHovered(null)}
          >
            Testimonios
          </Link>
          <Link
            href="/"
            title=" Política de Privacidad"
            className="text-white text-sm hover:underline"
            onMouseEnter={() => setHovered("politica-de-privacidad")}
            onMouseLeave={() => setHovered(null)}
          >
            Política de Privacidad
          </Link>
          <Link
            href="/"
            title=" Términos y Condiciones"
            className="text-white text-sm hover:underline"
            onMouseEnter={() => setHovered("terminos-y-condiciones")}
            onMouseLeave={() => setHovered(null)}
          >
            Términos y Condiciones
          </Link>
        </div>

        {/* Menú desplegable */}
        <div
          className={`fixed top-12 left-0 w-screen bg-[#141618] text-white p-4 border-t border-gray-700 transition-transform duration-300 ease-in-out ${
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-20px]"
          }`}
          style={{ zIndex: 100 }}
        >
          {hovered === "home" && (
            <div>
              <p>Inicio - Menú</p>
              {/* Agrega contenido específico para el menú de Inicio */}
            </div>
          )}
          {hovered === "productos" && (
            <div>
              <p>Productos - Menú</p>
              {/* Agrega contenido específico para el menú de Productos */}
            </div>
          )}
          {hovered === "servicios" && (
            <div>
              <p>Servicios - Menú</p>
              {/* Agrega contenido específico para el menú de Servicios */}
            </div>
          )}
          {hovered === "acerca-de" && (
            <div>
              <p>Acerca de - Menú</p>
              {/* Agrega contenido específico para el menú de Acerca de */}
            </div>
          )}
          {hovered === "contacto" && (
            <div>
              <p>Contacto - Menú</p>
              {/* Agrega contenido específico para el menú de Contacto */}
            </div>
          )}
          {hovered === "blog" && (
            <div>
              <p>Blog - Menú</p>
              {/* Agrega contenido específico para el menú de Blog */}
            </div>
          )}
          {hovered === "soporte" && (
            <div>
              <p>Soporte - Menú</p>
              {/* Agrega contenido específico para el menú de Soporte */}
            </div>
          )}
          {hovered === "faq" && (
            <div>
              <p>FAQ - Menú</p>
              {/* Agrega contenido específico para el menú de FAQ */}
            </div>
          )}
          {hovered === "testimonios" && (
            <div>
              <p>Testimonios - Menú</p>
              {/* Agrega contenido específico para el menú de Testimonios */}
            </div>
          )}
          {hovered === "politica-de-privacidad" && (
            <div>
              <p>Política de Privacidad - Menú</p>
              {/* Agrega contenido específico para el menú de Política de Privacidad */}
            </div>
          )}
          {hovered === "terminos-y-condiciones" && (
            <div>
              <p>Términos y Condiciones - Menú</p>
              {/* Agrega contenido específico para el menú de Términos y Condiciones */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
