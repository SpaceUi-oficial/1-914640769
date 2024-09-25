"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú en dispositivos móviles
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (activeMenu) {
      setActiveMenu(null);
    }
  };

  // Variantes para las animaciones de entrada/salida
  const menuVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };
  return (
    <nav
      className={`  fixed w-full top-0 left-0 z-50 h-[44px]  ${
        !isMenuOpen ? "bg-[#1b1b1db6]" : "bg-[#161617]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-center relative group h-full">
        <div className="md:flex hidden gap-4 lg:gap-8 items-center ">
          {/* Enlaces de la Navbar */}
          <span className="relative block w-auto h-12 content-center ">
            <FaApple color="white" />
          </span>
          {[
            "Mac",
            "Ipad",
            "Iphone",
            "Watch",
            "AirPods",
            "Tv y Home",
            "Entertainment",
            "Soporte",
            "Donde comprar",
          ].map((item) => (
            <span
              key={item}
              onMouseEnter={() => setHovered(item.toLowerCase())}
              onMouseLeave={() => setHovered(null)}
              className="relative block w-auto h-12 "
            >
              <Link
                href="/"
                title={item}
                className="text-gray-300 text-[12px] hover:underline h-full flex items-center justify-center"
              >
                {item}
              </Link>
            </span>
          ))}
          <span className="relative block w-auto h-12 content-center ">
            <FaMagnifyingGlass color="white" />
          </span>

          {/* Menú desplegable */}
          {hovered && (
            <>
              <div
                className="fixed top-[44px] left-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm  "
                style={{ zIndex: 5 }}
              />

              <motion.div
                className={`fixed top-[44px] left-0 w-screen h-1/2 bg-[#161617] text-white `}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ zIndex: 20 }}
                onMouseEnter={() => setHovered(hovered)} // Mantener abierto al pasar el mouse sobre el menú
                onMouseLeave={() => setHovered(null)} // Cerrar al salir del menú
              >
                <div className="h-1/2 w-full p-4 border-t border-gray-700 py-[44px] ">
                  <div className=" max-w-[1024px] mx-auto ">
                    <div
                      className={`grid ${
                        hovered === "soporte" ? "grid-cols-3" : "grid-cols-2"
                      } gap-4 mx-auto`}
                    >
                      {/* Contenido manual */}
                      {hovered === "mac" && (
                        <>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Conoce la Mac
                            </p>
                            <p className=" text-2xl">
                              Ver todos los modelos de Mac
                            </p>
                            <p className=" text-2xl">MacBook Air</p>
                            <p className=" text-2xl">MacBook Pro</p>
                            <p className=" text-2xl">IMac</p>
                            <p className=" text-2xl">Mac mini</p>
                            <p className=" text-2xl">Mac Studio</p>
                            <p className=" text-2xl">Mac Pro</p>
                            <p className=" text-2xl mb-5">Monitories</p>
                            <p className=" text-sm">
                              Comparar los modelos de Mac
                            </p>
                            <p className=" text-sm">La Mac lo hace</p>
                          </div>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Más para la Mac
                            </p>
                            <p className=" text-sm">Soporte para la Mac </p>
                            <p className=" text-sm">Mac0S Sequola</p>
                            <p className=" text-sm">Apple intelligence </p>
                            <p className=" text-sm">Apps de Apple </p>
                            <p className=" text-sm">Continuidad</p>
                            <p className=" text-sm">Icloud+ </p>
                            <p className=" text-sm">Mac para la empresa </p>
                          </div>
                        </>
                      )}
                      {hovered === "ipad" && (
                        <>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Conoce la Ipad
                            </p>
                            <p className=" text-2xl">
                              Ver todos los modelos de Ipad
                            </p>
                            <p className=" text-2xl">Ipad Pro</p>
                            <p className=" text-2xl">Ipad Air</p>
                            <p className=" text-2xl">Ipad</p>
                            <p className=" text-2xl">Ipad mini</p>
                            <p className=" text-2xl">Apple Pencil </p>
                            <p className=" text-2xl mb-5">Teclados</p>
                            <p className=" text-sm">
                              Comparar los modelos de Ipad
                            </p>
                            <p className=" text-sm">Por qué el Ipad</p>
                          </div>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Más para el Ipad
                            </p>
                            <p className=" text-sm">Soporte para el Ipad </p>
                            <p className=" text-sm">Ipad0S 18</p>
                            <p className=" text-sm">Apple intelligence </p>
                            <p className=" text-sm">Apps de Apple </p>
                            <p className=" text-sm">Icloud+ </p>
                          </div>
                        </>
                      )}
                      {hovered === "iphone" && (
                        <>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Conoce el Iphone
                            </p>
                            <p className=" text-2xl">
                              Ver todos los modelos de Iphone
                            </p>
                            <p className=" text-2xl">Iphone 16 Pro</p>
                            <p className=" text-2xl">Iphone 16</p>
                            <p className=" text-2xl">Iphone 15</p>
                            <p className=" text-2xl">Iphone 14</p>
                            <p className=" text-2xl mb-5">Iphone SE</p>
                            <p className=" text-sm">
                              Comparar los modelos de iphone
                            </p>
                            <p className=" text-sm">Cambiate desde Android</p>
                          </div>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Más para el Iphone
                            </p>
                            <p className=" text-sm">Soporte para el iphone </p>
                            <p className=" text-sm">IOS 18</p>
                            <p className=" text-sm">Apple intelligence </p>
                            <p className=" text-sm">Apps de Apple </p>
                            <p className=" text-sm">Privacidad en el Iphone </p>
                            <p className=" text-sm">Icloud+ </p>
                            <p className=" text-sm">Apple pay </p>
                          </div>
                        </>
                      )}
                      {hovered === "watch" && (
                        <>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Conoce el Watch
                            </p>
                            <p className=" text-2xl">
                              Ver todos los modelos de Apple Watch
                            </p>
                            <p className=" text-2xl">Apple Watch Series 10</p>
                            <p className=" text-2xl">Apple Watch Ultra 2</p>
                            <p className=" text-2xl">Apple Watch SE</p>
                            <p className=" text-2xl mb-3">Apple Watch Nike</p>
                            <p className=" text-sm">
                              Comparar los modelos de Apple Watch
                            </p>
                            <p className=" text-sm">Por qué el Apple Watch</p>
                          </div>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Más para el Apple Watch
                            </p>
                            <p className=" text-sm">
                              Soporte para el Apple Watch{" "}
                            </p>
                            <p className=" text-sm">Watch0S 11</p>
                            <p className=" text-sm">Apps de Apple </p>
                          </div>
                        </>
                      )}
                      {hovered === "airpods" && (
                        <>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Conoce el AirPods
                            </p>
                            <p className=" text-2xl">
                              Ver todos los modelos de AirPods
                            </p>
                            <p className=" text-2xl">AirPods 4</p>
                            <p className=" text-2xl">AirPods Pro 2</p>
                            <p className=" text-2xl mb-3">AirPods Max</p>
                            <p className=" text-sm">
                              Comparar los modelos de AirPods
                            </p>
                          </div>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Más para los AirPods
                            </p>
                            <p className=" text-sm">Soporte para el AirPods</p>
                            <p className=" text-sm">Apple Music</p>
                          </div>
                        </>
                      )}
                      {hovered === "tv y home" && (
                        <>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Conoce los dispositivos para la TV y la casa
                            </p>
                            <p className=" text-2xl">
                              Ver los dispositivos para la TV y la casa
                            </p>
                            <p className=" text-2xl mb-3">Apple TV 4K</p>
                          </div>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Más para la TV y la casa
                            </p>
                            <p className=" text-sm">Soporte para el Apple TV</p>
                            <p className=" text-sm">App Apple TV</p>
                            <p className=" text-sm">Apple TV+</p>
                            <p className=" text-sm">App Casa</p>
                            <p className=" text-sm">Apple Music</p>
                            <p className=" text-sm">AirPlay</p>
                          </div>
                        </>
                      )}
                      {hovered === "entertainment" && (
                        <>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Conoce los servicios de entretenimiento
                            </p>
                            <p className=" text-2xl">
                              Ver los servicios de entretenimiento
                            </p>
                            <p className=" text-2xl">Apple One</p>
                            <p className=" text-2xl">Apple TV+</p>
                            <p className=" text-2xl">Apple Music</p>
                            <p className=" text-2xl">Apple Arcade</p>
                            <p className=" text-2xl">Apple Podcasts</p>
                            <p className=" text-2xl">Apple Books</p>
                            <p className=" text-2xl mb-3">App Store </p>
                          </div>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">Soporte</p>
                            <p className=" text-sm">Soporte para Apple TV+</p>
                            <p className=" text-sm">Soporte para Apple Music</p>
                          </div>
                        </>
                      )}
                      {hovered === "soporte" && (
                        <>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Conoce los servicios de soporte
                            </p>
                            <p className=" text-2xl">Iphone</p>
                            <p className=" text-2xl">Mac</p>
                            <p className=" text-2xl">Ipad</p>
                            <p className=" text-2xl">Watch</p>
                            <p className=" text-2xl">AirPods</p>
                            <p className=" text-2xl">Musica</p>
                            <p className=" text-2xl mb-3">TV</p>
                            <p className=" text-sm">
                              Ver los servicios de soporte
                            </p>
                          </div>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">Obtén ayuda</p>
                            <p className=" text-sm">Comunidad</p>
                            <p className=" text-sm">Comunidad</p>
                            <p className=" text-sm">Reparación</p>
                          </div>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">
                              Temas útiles
                            </p>
                            <p className=" text-sm">Apple ID y contraseña</p>
                            <p className=" text-sm">
                              Facturacioón y suscripciones
                            </p>
                            <p className=" text-sm">App Encontrar</p>
                            <p className=" text-sm">Accesibilidad</p>
                          </div>
                        </>
                      )}
                      {hovered === "donde comprar" && (
                        <>
                          <div className=" gap-4">
                            <p className=" text-[#86868b] mb-3 ">Explorar</p>
                            <p className=" text-2xl">
                              Distribuidores autorizados
                            </p>
                            <p className=" text-2xl">
                              Servicio y soporte técnico
                            </p>
                            <p className=" text-2xl mb-3">Consultoría</p>
                            <p className=" text-sm">
                              Ver todas las formas de comprar
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
        <div className="md:hidden flex gap-4 lg:gap-8 items-center w-full p-5 ">
          <div
            className={` justify-start   w-full h-auto ${
              !activeMenu ? "hidden" : "flex"
            } `}
          >
            <button className="text-xl" onClick={() => setActiveMenu(null)}>
              <FaArrowLeft />
            </button>
          </div>
          <div
            className={` justify-start   w-full h-auto ${
              !activeMenu ? "flex" : "hidden"
            } `}
          >
            <button className="text-xl" onClick={() => setActiveMenu(null)}>
              <FaApple color="white" />
            </button>
          </div>     

          <div className="flex w-full justify-end mr-5">
            <button onClick={toggleMobileMenu} className="text-white my-auto">
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>

          {/* Menú desplegable */}
          {isMenuOpen && (
            <>
              <div
                className="fixed top-[44px] left-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm"
                style={{ zIndex: 5 }}
              />

              <motion.div
                className="fixed top-[44px] left-0 w-screen h-full bg-[#161617] text-white"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ zIndex: 20 }}
                onMouseEnter={() => setHovered(hovered)} // Mantener abierto al pasar el mouse sobre el menú
                onMouseLeave={() => setHovered(null)} // Cerrar al salir del menú
              >
                <div className="h-full max-w-[1024px] mx-auto overflow-y-auto">
                  <div className="p-4  ">
                    {/* Mostrar el menú si no hay un menú activo */}
                    {!activeMenu && (
                      <motion.div
                        className="flex flex-col space-y-4 text-left px-9"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {[
                          "Mac",
                          "iPad",
                          "iPhone",
                          "Watch",
                          "AirPods",
                          "TV y Home",
                          "Entertainment",
                          "Soporte",
                          "Dónde comprar",
                        ].map((item) => (
                          <div>
                            <button
                              key={item}
                              className="text-2xl w-auto" // Cambié a w-auto para que no ocupe el 100%
                              onClick={() => setActiveMenu(item.toLowerCase())} // Asegúrate de que el menú sea coherente
                            >
                              {item}
                            </button>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* Mostrar el contenido cuando se selecciona un menú */}
                    {activeMenu && (
                      <motion.div
                        className="flex flex-col items-start justify-start  text-start"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {activeMenu === "mac" && (
                          <div className="px-10 pb-20  ">
                            <div className="">
                              <p className="text-2xl font-medium mb-3 ">
                                Ver todos los modelos de Mac
                              </p>
                              <p className="text-2xl font-medium  mb-3">
                                MacBook Air
                              </p>
                              <p className="text-2xl font-medium  mb-3">
                                MacBook Pro
                              </p>
                              <p className="text-2xl font-medium  mb-3">IMac</p>
                              <p className="text-2xl font-medium  mb-3">
                                Mac mini
                              </p>
                              <p className="text-2xl font-medium  mb-3">
                                Mac Studio
                              </p>
                              <p className="text-2xl mb-5 font-medium">
                                Mac Pro
                              </p>
                              <p className="text-2xl mb-5 font-medium">
                                Monitores
                              </p>
                              <p className="text-lg  font-medium mb-2">
                                Comparar los modelos de Mac
                              </p>
                              <p className="text-lg  font-medium mb-14">
                                La Mac lo hace
                              </p>
                            </div>
                            <div className="gap-4">
                              <p className="text-[#86868b] text-lg mb-3">
                                Más para la Mac
                              </p>
                              <p className="text-xl font-medium mb-3">
                                Soporte para la Mac
                              </p>
                              <p className="text-xl font-medium mb-3">
                                MacOS Sequola
                              </p>
                              <p className="text-xl font-medium mb-3">
                                Apple Intelligence
                              </p>
                              <p className="text-xl font-medium mb-3">
                                Apps de Apple
                              </p>
                              <p className="text-xl font-medium mb-3">
                                Continuidad
                              </p>
                              <p className="text-xl font-medium mb-3">
                                iCloud+
                              </p>
                              <p className="text-xl font-medium mb-3">
                                Mac para la empresa
                              </p>
                            </div>
                          </div>
                        )}
                        {activeMenu === "ipad" && (
                          <div className="px-10 pb-20  ">
                            <div className=" ">
                              <p className="text-2xl font-medium mb-3 ">
                                Ver todos los modelos de IPad
                              </p>
                              <p className="text-2xl font-medium mb-3 ">
                                IPad Pro
                              </p>
                              <p className="text-2xl font-medium mb-3 ">
                                IPad Air
                              </p>
                              <p className="text-2xl font-medium mb-3 ">IPad</p>
                              <p className="text-2xl font-medium mb-3 ">
                                IPad mini
                              </p>
                              <p className="text-2xl font-medium mb-3 ">
                                Apple Pencil{" "}
                              </p>
                              <p className="text-2xl font-medium mb-5  ">
                                Teclados
                              </p>
                              <p className="text-lg  font-medium mb-2">
                                Comparar los modelos de IPad
                              </p>
                              <p className="text-lg font-medium mb-14 ">
                                Por qué el IPad
                              </p>
                            </div>
                            <div className=" gap-4">
                              <p className=" text-[#86868b] mb-5 ">
                                Más para el Ipad
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Soporte para el Ipad{" "}
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Ipad0S 18
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Apple intelligence{" "}
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Apps de Apple{" "}
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Icloud+{" "}
                              </p>
                            </div>
                          </div>
                        )}
                        {activeMenu === "iphone" && (
                          <div className="px-10 pb-20  ">
                            <div className=" ">
                              <p className="text-2xl font-medium mb-3 ">
                                Ver todos los modelos de IPhone
                              </p>
                              <p className="text-2xl font-medium mb-3 ">
                                IPhone 16 Pro
                              </p>
                              <p className="text-2xl font-medium mb-3 ">
                                IPhone 16
                              </p>
                              <p className="text-2xl font-medium mb-3 ">
                                IPhone 15
                              </p>
                              <p className="text-2xl font-medium mb-3 ">
                                IPhone 14
                              </p>
                              <p className="text-2xl font-medium mb-5 ">
                                IPhone SE
                              </p>
                              <p className="text-[15px]  font-medium mb-2">
                                Comparar los modelos de iPhone
                              </p>
                              <p className="text-lg font-medium mb-14 ">
                                Cambiate desde Android
                              </p>
                            </div>
                            <div className=" gap-4">
                              <p className=" text-[#86868b] mb-3 ">
                                Más para el IPhone
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Soporte para el iphone{" "}
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                IOS 18
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Apple intelligence{" "}
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Apps de Apple{" "}
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Privacidad en el Iphone{" "}
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Icloud+{" "}
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Apple pay{" "}
                              </p>
                            </div>
                          </div>
                        )}
                        {activeMenu === "watch" && (
                          <div className="px-10 pb-20  ">
                            <div className=" ">
                              <p className="text-2xl font-medium mb-3 ">
                                Ver todos los modelos de Apple Watch
                              </p>
                              <p className="text-2xl font-medium mb-3 ">
                                Apple Watch Series 10
                              </p>
                              <p className="text-2xl font-medium mb-3 ">
                                Apple Watch Ultra 2
                              </p>
                              <p className="text-2xl font-medium mb-3 ">
                                Apple Watch SE
                              </p>
                              <p className="text-2xl font-medium mb-5 ">
                                Apple Watch Nike
                              </p>
                              <p className="text-[15px]  font-medium mb-2">
                                Comparar los modelos de Apple Watch
                              </p>
                              <p className="text-lg font-medium mb-14 ">
                                Por qué el Apple Watch
                              </p>
                            </div>
                            <div className=" gap-4">
                              <p className=" text-[#86868b] mb-3 ">
                                Más para el Apple Watch
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Soporte para el Apple Watch{" "}
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Watch0S 11
                              </p>
                              <p className="text-lg font-medium mb-3 ">
                                Apps de Apple{" "}
                              </p>
                            </div>
                          </div>
                        )}
                        {activeMenu === "airpods" && (
                          <div className="px-10 pb-20">
                            <div className="gap-4">
                              <p className="text-2xl font-medium mb-3">
                                Ver todos los modelos de AirPods
                              </p>
                              <p className="text-2xl font-medium mb-3">
                                AirPods 4
                              </p>
                              <p className="text-2xl font-medium mb-3">
                                AirPods Pro 2
                              </p>
                              <p className="text-2xl font-medium mb-5">
                                AirPods Max
                              </p>
                              <p className="text-[17px] font-medium mb-14">
                                Comparar los modelos de AirPods
                              </p>
                            </div>
                            <div className="gap-4">
                              <p className="text-[#86868b] mb-3">
                                Más para los AirPods
                              </p>
                              <p className="text-lg font-medium mb-3">
                                Soporte para los AirPods
                              </p>
                              <p className="text-lg font-medium mb-3">
                                Apple Music
                              </p>
                            </div>
                          </div>
                        )}
                        {activeMenu === "tv y home" && (
                          <div className="px-10 pb-20">
                            <div className="gap-4">
                              <p className="text-2xl font-medium mb-3">
                                Ver los dispositivos para la TV y la casa
                              </p>
                              <p className="text-lg font-medium mb-14">
                                Apple TV 4K
                              </p>
                            </div>
                            <div className="gap-4">
                              <p className="text-[#86868b] mb-3">
                                Más para la TV y la casa
                              </p>
                              <p className="text-lg font-medium mb-3">
                                Soporte para el Apple TV
                              </p>
                              <p className="text-lg font-medium mb-3">
                                App Apple TV
                              </p>
                              <p className="text-lg font-medium mb-3">
                                Apple TV+
                              </p>
                              <p className="text-lg font-medium mb-3">
                                App Casa
                              </p>
                              <p className="text-lg font-medium mb-3">
                                Apple Music
                              </p>
                              <p className="text-lg font-medium mb-3">
                                AirPlay
                              </p>
                            </div>
                          </div>
                        )}

                        {activeMenu === "entertainment" && (
                          <div className="px-10 pb-20">
                            <div className="">
                              <p className="text-2xl font-medium mb-3">
                                Ver los servicios de entretenimiento
                              </p>
                              <p className="text-2xl font-medium mb-3">
                                Apple One
                              </p>
                              <p className="text-2xl font-medium mb-3">
                                Apple TV+
                              </p>
                              <p className="text-2xl font-medium mb-3">
                                Apple Music
                              </p>
                              <p className="text-2xl font-medium mb-3">
                                Apple Arcade
                              </p>
                              <p className="text-2xl font-medium mb-3">
                                Apple Podcasts
                              </p>
                              <p className="text-2xl font-medium mb-3">
                                Apple Books
                              </p>
                              <p className="text-2xl font-medium mb-14">
                                App Store
                              </p>
                            </div>
                            <div className="gap-4">
                              <p className="text-[#86868b] mb-3">Soporte</p>
                              <p className="text-lg mb-3">
                                Soporte para Apple TV+
                              </p>
                              <p className="text-lg mb-3">
                                Soporte para Apple Music
                              </p>
                            </div>
                          </div>
                        )}

                        {activeMenu === "soporte" && (
                          <div className="px-10 pb-20">
                            <div className="">
                              <p className="text-2xl font-medium mb-3">
                                IPhone
                              </p>
                              <p className="text-2xl font-medium mb-3">Mac</p>
                              <p className="text-2xl font-medium mb-3">Ipad</p>
                              <p className="text-2xl font-medium mb-3">Watch</p>
                              <p className="text-2xl font-medium mb-3">
                                AirPods
                              </p>
                              <p className="text-2xl font-medium mb-3">
                                Musica
                              </p>
                              <p className="text-2xl font-medium mb-5">TV</p>
                              <p className="text-lg mb-14">
                                Ver los servicios de soporte
                              </p>
                            </div>
                            <div className="gap-4">
                              <p className="text-[#86868b] mb-3">Obten ayuda</p>
                              <p className="text-lg mb-3">Comunidad</p>
                              <p className="text-lg mb-3">Reparación</p>
                              <p className="text-lg mb-20">Contáctanos</p>
                            </div>
                            <div className="gap-4">
                              <p className="text-[#86868b] mb-3">
                                Temas útiles
                              </p>
                              <p className="text-lg mb-3">
                                Apple ID y contraseña
                              </p>
                              <p className="text-lg mb-3">
                                Facturación y suscripciones
                              </p>
                              <p className="text-lg mb-3">App Encontrar</p>
                              <p className="text-lg mb-3">Accesibilidad</p>
                            </div>
                          </div>
                        )}

                        {activeMenu === "dónde comprar" && (
                          <div className="px-10 pb-20">
                            <div className="">
                              <p className="text-2xl font-medium mb-3">
                                Distribuidores autorizados
                              </p>
                              <p className="text-2xl font-medium mb-3">
                                Servicio y soporte técnico
                              </p>
                              <p className="text-2xl font-medium mb-5">
                                Consultoría
                              </p>
                              <p className="text-sm">
                                Ver todas las formas de comprar
                              </p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
