"use client";
import Image from "next/image";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import CarouselSection from "./components/carruselSection/page";
import VideoToImage from "./components/VideoToImage/page";
export default function Home() {
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);

  const [isPlaying1, setIsPlaying1] = useState<boolean>(true);
  const [isPlaying2, setIsPlaying2] = useState<boolean>(true);

  const toggleVideo1 = () => {
    if (video1Ref.current) {
      if (video1Ref.current.paused) {
        video1Ref.current.play();
        setIsPlaying1(true);
      } else {
        video1Ref.current.pause();
        setIsPlaying1(false);
      }
    }
  };

  const toggleVideo2 = () => {
    if (video2Ref.current) {
      if (video2Ref.current.paused) {
        video2Ref.current.play();
        setIsPlaying2(true);
      } else {
        video2Ref.current.pause();
        setIsPlaying2(false);
      }
    }
  };
  const images = [
    "/image/swiper/Acapulco.jpg",
    "/image/swiper/Incitadores.jpg",
    "/image/swiper/LaMujerEnElLago.jpg",
    "/image/swiper/LasAzules.jpg",
    "/image/swiper/MateriaOscura.jpg",
    "/image/swiper/Napoleon.jpg",
    "/image/swiper/Pachinko.jpg",
    "/image/swiper/SePresume.jpg",
  ];
  const texts = [
    { title: "Comedia", description1: "Todo es posible en el paraíso" },
    { title: "Acción", description1: "El peor robo del mundo." },
    { title: "Suspenso", description1: "Natalie Portman y Moses Ingram protagonizan un visionario thriller." },
    { title: "Crimen", description1: "La historia inspirada en crímenes reales y las mujeres que los resolvieron." },
    { title: "Ciencia ficción", description1: "Una vida, posibilidades infinitas." },
    { title: "Drama", description1: "Disfruta la versión extendida de Ridley Scott." },
    { title: "Drama", description1: "El valor para cambiar tu destino está en ti." },
    { title: "Crimen", description1: "Nueva serie." }
  ];

  return (
    <main>
      {/* Primera Sección: Video */}
      <section className="relative min-h-screen bg-black w-full flex flex-col items-center overflow-clip">
        <div className="w-full relative">
          <video
            className="max-h-[95vh] w-full rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            controls={false}
            ref={video1Ref}
          >
            <source src="/videos/videoprincipal.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de este video.
          </video>
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center z-10">
            <h2 className="text-4xl leading-[1.1666666667] font-semibold tracking-tight text-white mb-4">
              Presentamos el iPhone 16 Pro y el iPhone 16. Los nuevos Apple
              Watch Series 10 y AirPods 4. El Apple Watch Ultra 2 y los AirPods
              Max en nuevos colores.
            </h2>
            <button className="bg-black border border-white px-6 py-4 rounded-full hover:bg-white hover:text-black mt-5">
              Ver el evento
            </button>
          </div>
          <div>
            <button
              onClick={toggleVideo1}
              className="absolute bottom-4 right-4 bg-[#353537] text-white px-4 py-4 rounded-full shadow-lg hover:bg-[#1e1e1f] focus:outline-none"
            >
              {isPlaying1 ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>
      </section>
      {/* Segunda Sección: Imágenes con Texto */}
      <section className="relative min-h-screen bg-black w-full flex flex-col items-center overflow-clip">
        <div className="relative w-full h-[100vh] flex flex-col items-center">
          {/* Imagen principal con animación de inclinación */}
          <div className="relative w-[80%] h-screen">
            <VideoToImage
              videoSrc="/videos/iphone_16_video.mp4"
              imageSrc="/image/iphone_16_pro__.jpg"
            />
          </div>

          {/* Texto en la parte superior */}
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2 text-center z-20">
            <h2 className="text-7xl leading-[1.2] font-semibold tracking-tight text-white mb-4">
              iPhone 16 Pro
            </h2>
          </div>

          {/* Textos en la parte inferior con animación */}
          <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 text-center z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl font-semibold text-[#aea9a8] leading-[1.2] mb-5 text-center">
                Control de la Cámara, una forma más fácil de acceder a las
                herramientas de la cámara. Grabación de video 4K Dolby Vision a
                120 cps. Bordes más delgados y pantallas más grandes. Potencia
                al extremo con el chip A18 Pro. Y creado con Apple Intelligence
                en mente.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg font-semibold text-white">
                Consulta la disponibilidad más adelante
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-lg font-semibold text-white">
                Apple Intelligence estará disponible próximamente este año en
                inglés de Estados Unidos*
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="bg-black border border-white px-6 py-4 rounded-full hover:bg-white hover:text-black mt-5">
                Mas informacion
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Nueva Sección: Imagen con Animación de Escala */}
      <section
        className="relative min-h-screen w-full flex items-center justify-center "
        style={{
          background:
            "linear-gradient(#0C1247, #30337D 18%, #505DAD 33%, #7D8ED1 49%, #AEBCE6 73%, #FAFAFC)",
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center ">
          {/* Imagen principal con animación de escala */}
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="relative w-[55%] h-screen"
            viewport={{ once: true }} // Animar solo la primera vez que esté en vista
          >
            <Image
              src="/image/iphone_16__blue.png" // Usa la URL de tu imagen
              alt="Imagen Animada"
              fill
              style={{ objectFit: "contain" }}
              className="absolute inset-0"
            />
          </motion.div>
          {/* Texto en la parte superior */}
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2 text-center z-20">
            <h2 className="text-7xl leading-[1.2] font-semibold tracking-tight text-white mb-4">
              iPhone 16
            </h2>
          </div>

          {/* Textos en la parte inferior con animación */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=" max-w-[75vh] mx-auto "
            >
              <p className="text-xl font-semibold text-black leading-[1.2] mb-5 ">
                Control de la Cámara, una forma más directa de acceder a las
                herramientas de la cámara. Versátil cámara ultra gran angular
                para tomar fotos más nítidas y con más detalles. Chip A18
                superrápido y superbrillante. Y creado con Apple Intelligence en
                mente.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg font-semibold text-[#606471]">
                Consulta la disponibilidad más adelante
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-lg font-semibold text-[#606471]">
                Apple Intelligence estará disponible próximamente este año en
                inglés de Estados Unidos*
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="bg-trasparent border text-black border-black px-6 py-4 rounded-full hover:bg-black hover:text-white mt-5">
                Mas informacion
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Nueva Sección: Reloj */}

      <section className="section-series-10 relative min-h-screen w-full bg-white flex items-center">
        <div className="section-content h-full w-full flex flex-col md:flex-col items-center justify-center">
          {/* Contenido del texto */}
          <div className="copy-wrapper text-center w-full p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Aparece desde abajo
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative  "
            >
              <Image
                src="/image/logo_watch_series_10.png"
                alt="Series 10 Logo"
                layout="intrinsic"
                width={500} // Puedes ajustar el tamaño según tus necesidades
                height={300}
                quality={100}
                className="mx-auto mb-10"
              />
            </motion.div>
            <motion.div
              className="max-w-[70vh] mx-auto"
              initial={{ opacity: 0, y: 20 }} // Aparece desde abajo
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <p className="text-2xl text-[#606471]">
                Nuestro reloj más delgado y con la pantalla más grande.
                Información importante sobre tu salud, como las notificaciones
                de apnea del sueño. Registro de tu actividad y de todos tus
                entrenamientos, con sensores de profundidad y temperatura del
                agua. Todo esto en el Apple Watch con la carga más rápida hasta
                ahora.
              </p>
              <div className="avail mt-4">
                <span className="font-medium text-base text-gray-700">
                  Consulta la disponibilidad más adelante
                </span>
              </div>
              <div className="cta-links mt-4">
                <button className="bg-white border text-black border-black px-6 py-4 rounded-full hover:bg-black hover:text-white mt-5">
                  Mas informacion
                </button>
              </div>
            </motion.div>
          </div>

          {/* Contenido de la imagen */}
          <div className="image-wrapper w-[80%] flex items-center justify-center">
            <div className="animation-wrapper">
              <div className="relative">
                <VideoToImage
                  videoSrc="/videos/reloj.mp4"
                  imageSrc="/image/watch_series_10.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Nueva Sección: Reloj 2 */}
      <section className="section-series-10 relative min-h-screen w-full bg-black flex items-center">
        <div className="section-content h-full w-full flex flex-col md:flex-col items-center justify-center">
          {/* Contenido del texto */}
          <div className="copy-wrapper text-center w-full p-8">
            <h3 className="text-2xl font-bold mb-4 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Aparece desde abajo
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative mx-auto"
              >
                <Image
                  src="/image/logo_watch_ultra_2.png"
                  alt="Series 10 Logo"
                  width={500} // Ancho de la imagen, ajusta según lo necesites
                  height={300} // Alto de la imagen, ajusta según lo necesites
                  className="relative mx-auto"
                  priority={true} // Si deseas que esta imagen sea prioritaria en la carga
                />
              </motion.div>
            </h3>
            <motion.div
              className="max-w-[70vh] mx-auto"
              initial={{ opacity: 0, y: 20 }} // Aparece desde abajo
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <p className="text-2xl text-[#606471]">
                Nuestro reloj más delgado y con la pantalla más grande.
                Información importante sobre tu salud, como las notificaciones
                de apnea del sueño. Registro de tu actividad y de todos tus
                entrenamientos, con sensores de profundidad y temperatura del
                agua. Todo esto en el Apple Watch con la carga más rápida hasta
                ahora.
              </p>
              <div className="avail mt-4">
                <span className="font-medium text-base text-white">
                  Consulta la disponibilidad más adelante
                </span>
              </div>
              <div className="cta-links mt-4">
                <button className="bg-black border text-white border-white px-6 py-4 rounded-full hover:bg-white hover:text-black mt-5">
                  Mas informacion
                </button>
              </div>
            </motion.div>
          </div>

          {/* Contenido de la imagen */}
          <div className="image-wrapper w-[80%] flex items-center justify-center">
            <div className="animation-wrapper">
              <div className="relative">
                <Image
                  src="/image/watch_ultra_2.jpg"
                  alt="Content after video"
                  width={1200} // Ancho de la imagen, ajusta según lo necesites
                  height={800} // Alto de la imagen, ajusta según lo necesites
                  className="max-h-[95vh] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative min-h-screen w-full flex items-end justify-center">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-screen object-cover"
          autoPlay
          muted
          loop
          playsInline
          ref={video2Ref}
        >
          <source src="/videos/large_dance.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de este video.
        </video>

        {/* Contenido sobre el video */}
        <div className="relative z-10 text-center text-white mb-32">
          <h2 className="text-7xl font-bold mb-4">AirPods 4</h2>
          <p className="text-2xl mb-5 opacity-75 max-w-[60vh]">
            Ajuste perfecto y comodidad excepcional durante todo el día. Una
            experiencia de audio totalmente renovada. Disponibles con
            Cancelación Activa de Ruido por primera vez en este diseño.
          </p>
          <p className="text-lg mb-6">
            Consulta la disponibilidad más adelante
          </p>
          <button className="bg-transparent text-white border boder-white px-6 py-3 rounded-full hover:bg-white hover:text-black">
            Mas informacion
          </button>
        </div>
        <button
          onClick={toggleVideo2}
          className="absolute bottom-4 right-4 bg-[#353537] text-white px-4 py-4 rounded-full shadow-lg hover:bg-[#1e1e1f] focus:outline-none z-20"
        >
          {isPlaying2 ? <FaPause /> : <FaPlay />}
        </button>
        {/* Filtro oscuro sobre el video */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>

      <section className="min-h-screen bg-white">
        <div className="grid grid-cols-2 gap-4 p-8">
          {/* Caja 1 */}
          <div className="bg-[#f5f5f7] text-black flex items-center justify-center h-[70vh]">
            <div className="relative h-full w-full text-black">
              {/* Imagen de fondo */}
              <Image
                src="/image/promo_airpodsmax.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
              />
              {/* Contenido centrado */}
              <div className="relative z-10 flex flex-col items-center justify-end bottom-14 h-full text-center">
                <h2 className="text-5xl font-bold mb-4">AirPods Max</h2>
                <p className="mb-2 text-lg">Una explosión de fidelidad.</p>
                <p className="mb-4 text-[#8d8d91]">
                  Consulta la disponibilidad más adelante
                </p>
                <button className="bg-blue-500 text-white rounded-full px-4 py-2">
                  Mas informacion
                </button>
              </div>
            </div>
          </div>

          {/* Caja 2 */}
          <div className="bg-black text-white flex items-center justify-center h-[70vh]">
            <div className="relative h-full w-full">
              {/* Imagen de fondo */}
              <Image
                src="/image/promo_ipadpro.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
              />
              {/* Contenido centrado */}
              <div className="relative z-10 flex flex-col items-center justify-start top-8 h-full text-center">
                <h2 className="text-4xl font-bold mb-1 mt-1">iPad Pro</h2>
                <p className="mb-1 text-lg">Increíblemente poderoso.</p>
                <p className="mb-2 text-lg">Asombrosamente delgado.</p>
                <button className="bg-blue-500 text-white rounded-full px-4 py-2">
                  Mas informacion
                </button>
              </div>
            </div>
          </div>

          {/* Caja 3 */}
          <div className="bg-[#f5f5f7] text-black flex items-center justify-center h-[70vh]">
            <div className="relative h-full w-full text-black">
              {/* Imagen de fondo */}
              <Image
                src="/image/promo_macbook_air_m3.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
              />
              {/* Contenido centrado */}
              <div className="relative z-10 flex flex-col items-center justify-start top-10 h-full text-center">
                <h2 className="text-5xl font-bold mb-4">MacBook Air</h2>
                <p className="mb-2 text-lg">Superligera. Superchip M3.</p>
                <button className="bg-blue-500 text-white rounded-full px-4 py-2">
                  Mas informacion
                </button>
              </div>
            </div>
          </div>

          {/* Caja 4 */}
          <div className="bg-[#f5f5f7] text-black flex items-center justify-center h-[70vh]">
            <div className="relative h-full w-full text-black">
              {/* Imagen de fondo */}
              <Image
                src="/image/promo_ipadair.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
              />
              {/* Contenido centrado */}
              <div className="relative z-10 flex flex-col items-center justify-start top-10 h-full text-center">
                <h2 className="mb-4 bg-[url('/image/promo_logo_ipadair.png')] bg-contain bg-center bg-no-repeat w-[88%] max-w-[430px] h-[48px]"></h2>
                <p className="mb-2 text-lg">Dos tamaños. Un chip más rápido.</p>
                <p className="mb-4 text-lg">Cero imposibles.</p>
                <button className="bg-[#272729] text-white rounded-full px-4 py-2">
                  Mas informacion
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CarouselSection imageSrcs={images} texts={texts} />
    </main>
  );
}
