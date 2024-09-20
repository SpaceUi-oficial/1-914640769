"use client";
import Image from "next/image";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration; // Se asegura de que el video se quede en el último frame
    }
  };
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
  const imageSrcs: string[] = [
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794289/qkuwtattkf3n9fpjsuvh.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794288/a0p5xmh0gol4bfmgl7xa.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794289/shtcpjmtzej84dcsrg9a.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794290/ztkz3dywpkfrkxabat44.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794292/n1pxsdt7vhmgvraxmhbb.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794294/wu8tembtwthdvfgyra8j.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794295/vcruathphi21nuuafq4y.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794288/h3ae4njuchmhi5ao65lx.jpg",
  ];
  const imageSrcsSmall: string[] = [
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794288/qfzkqrweagyc1vvtj4aj.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794288/x6mxlrnajwoae6ovboep.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794289/knlrdlkl3udnoovqmtjo.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794291/nd6bgsnahspaoobuxrvd.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794292/nwvqsqvigcaq77hkws01.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794294/exqc6s7liftzjj1qxj3n.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794295/kidx84k2iqfjgtd8cve7.jpg",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794287/ie5dh9ldcupagghs1nsb.jpg",
  ];
  const imageSrcsLogo: string[] = [
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794287/pzxayxb0ontj7znwezyh.png",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794287/vroczkxrywhz02yby3yh.png",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794289/aexmbmiioit3ql35ulop.png",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794289/e6oyecblrqdfquvr9nwx.png",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794292/no4ac8obx6ckejcatjyg.png",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794294/lusqkvprphjfpbqzfhrk.png",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794295/b1t8jbu97pbhhaswrsuy.png",
    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794287/utpqh8tgqkj6ahj5t6lw.png",
  ];

  const texts: { title: string; description1: string }[] = [
    {
      title: "Ciencia ficción",
      description1: "Una vida, posibilidades infinitas.",
    },
    { title: "Acción", description1: "El peor robo del mundo." },
    {
      title: "Suspenso",
      description1:
        "Natalie Portman y Moses Ingram protagonizan un visionario thriller.",
    },
    {
      title: "Crimen",
      description1:
        "La historia inspirada en crímenes reales y las mujeres que los resolvieron.",
    },
    {
      title: "Ciencia ficción",
      description1: " Una vida, posibilidades infinitas.",
    },

    {
      title: "Drama",
      description1: "Disfruta la versión extendida de Ridley Scott.",
    },
    {
      title: "Drama",
      description1: "El valor para cambiar tu destino está en ti.",
    },
    { title: "Crimen", description1: "Nueva serie" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main>
      {/* Primera Sección: Video */}
      <section className="relative min-h-screen  bg-black w-full flex flex-col items-center overflow-hidden">
        <div className="w-full h-full relative">
          <video
            className="w-full h-screen object-cover lg:object-contain rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            controls={false}
            ref={video1Ref}
          >
            <source
              src="https://res.cloudinary.com/djnpyyl6b/video/upload/v1726847341/jxxkzajmr2veegokpypy.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta la reproducción de este video.
          </video>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10 px-2 sm:px-4 md:px-0">
            {/* Texto completo para pantallas pequeñas */}
            <h2 className="text-2xl hidden  md:block leading-tight font-semibold tracking-tight text-white mb-4">
              Presentamos el iPhone 16 Pro y el iPhone 16. Los nuevos Apple
              Watch Series 10 y AirPods 4. El Apple Watch Ultra 2 y los AirPods
              Max en nuevos colores.
            </h2>

            {/* Texto acortado para pantallas medianas y más grandes */}
            <h2 className=" md:hidden  text-base sm:text-xl md:text-xl lg:text-2xl  leading-tight font-semibold tracking-tight text-white mb-4">
              Presentamos el iPhone 16 , Apple Watch y los nuevos AirPods.
            </h2>

            <button className="bg-black border border-white px-4 sm:px-6 py-2 sm:py-4 rounded-full hover:bg-white hover:text-black mt-5">
              Ver el evento
            </button>
          </div>
          <div>
            <button
              onClick={toggleVideo1}
              className="absolute bottom-4 right-4 bg-[#353537] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#1e1e1f] focus:outline-none"
            >
              {isPlaying1 ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>
      </section>

      {/* Segunda Sección: Imágenes con Texto */}
      <section className="relative  h-screen bg-cover bg-no-repeat bg-center lg:bg-black bg-[url('https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794463/usiixm6xzqs0mladcm1c.jpg')]  w-full flex flex-col items-center overflow-clip">
        <div className="relative w-full h-screen flex flex-col items-center">
          {/* Imagen principal con video */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative  w-full h-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover hidden lg:block"
                autoPlay
                muted
                playsInline
                preload="auto"
                controls={false}
              >
                <source
                  src={
                    "https://res.cloudinary.com/djnpyyl6b/video/upload/v1726847338/lovdaefpgwucq5veeflc.mp4"
                  }
                  type="video/mp4"
                />
                {/* Si el navegador no soporta el video, muestra la imagen de respaldo */}
                Tu navegador no soporta la reproducción de este video.
                <Image
                  src={
                    "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794463/usiixm6xzqs0mladcm1c.jpg"
                  }
                  alt="Imagen de respaldo"
                  width={1920}
                  height={1080}
                  quality={100}
                />
              </video>
            </div>
          </div>

          {/* Título en la parte superior */}
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2 text-center z-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-semibold tracking-tight text-white mb-4">
              iPhone 16 Pro
            </h2>
          </div>

          {/* Texto y botón en la parte inferior */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg sm:text-xl font-semibold text-white mb-5">
                Consulta la disponibilidad más adelante
              </p>
            </motion.div>

            {/* Textos adicionales visibles solo en pantallas grandes (lg en adelante) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden lg:block"
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
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="bg-black border border-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-white hover:text-black">
                Más información
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Imagen con Animación de Escala */}
      <section
        className="relative h-[80vh] md:h-screen  w-full flex items-center justify-center "
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
            className="relative w-[95%]  md:w-[75%]  lg:w-[55%] h-screen"
            viewport={{ once: true }} // Animar solo la primera vez que esté en vista
          >
            <Image
              src="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794462/jcq0ffnenimp739llktv.png" // Usa la URL de tu imagen
              alt="Imagen Animada"
              fill
              style={{ objectFit: "contain" }}
              className="absolute inset-0"
            />
          </motion.div>
          {/* Texto en la parte superior */}
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2 text-center z-20">
            <h2 className="text-4xl md:text-7xl leading-[1.2] font-semibold tracking-tight text-white mb-4">
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
              <p className="text-xl font-semibold text-black leading-[1.2] mb-5 lg:block hidden">
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
              <p className="text-lg font-semibold text-[#606471] lg:block hidden">
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

      <section className="section-series-10 relative  w-full bg-white flex items-center">
        <div className="section-content h-[80vh] md:h-screen w-full flex flex-col md:flex-col items-center justify-center">
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
                src="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794459/ykhhtdm5m4tq0kwsmpb9.png"
                alt="Series 10 Logo"
                width={284} // Puedes ajustar el tamaño según tus necesidades
                height={99}
                quality={100}
                className="mx-auto mb-10 h-auto w-2/5"
              />
            </motion.div>
            <motion.div
              className="max-w-[70vh] mx-auto"
              initial={{ opacity: 0, y: 20 }} // Aparece desde abajo
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <p className="text-2xl text-[#606471] hidden md:block">
                Nuestro reloj más delgado y con la pantalla más grande.
                Información importante sobre tu salud, como las notificaciones
                de apnea del sueño. Registro de tu actividad y de todos tus
                entrenamientos, con sensores de profundidad y temperatura del
                agua. Todo esto en el Apple Watch con la carga más rápida hasta
                ahora.
              </p>
              <p className="text-2xl text-black  md:hidden">
                Delgado. Estilizado. Avanzado.
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
          <div className="image-wrapper md:w-[80%] h-full flex items-end justify-center">
            <div className="animation-wrapper">
              <div className="relative">
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    className=" w-full"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={handleVideoEnd}
                    controls={false}
                  >
                    <source
                      src={
                        "https://res.cloudinary.com/djnpyyl6b/video/upload/v1726847338/blqkrq2jyuqbn0lmwgzc.mp4"
                      }
                      type="video/mp4"
                    />
                    {/* Si el navegador no soporta el video, muestra la imagen de respaldo */}
                    Tu navegador no soporta la reproducción de este video.
                    <Image
                      src={
                        "https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794466/b55jtda6add9qwgmhpzb.jpg"
                      }
                      alt="Imagen de respaldo"
                      width={1920}
                      height={1080}
                      quality={100}
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Nueva Sección: Reloj 2 */}
      <section className="section-series-10 relative   w-full bg-black flex items-center">
        <div className="section-content h-[80vh] md:h-screen lg:h-[120vh] w-full flex flex-col md:flex-col items-center justify-center">
          {/* Contenido del texto */}
          <div className="copy-wrapper text-center w-full p-8">
            <h3 className="text-2xl font-bold mb-4 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Aparece desde abajo
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794465/kjehoqyqgp13xyerpefc.png"
                  alt="Series 10 Logo"
                  width={284} // Ancho de la imagen, ajusta según lo necesites
                  height={99} // Alto de la imagen, ajusta según lo necesites
                  className=" mx-auto h-auto w-2/5"
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
              <p className="text-2xl text-[#606471] hidden md:block">
                Nuestro reloj más delgado y con la pantalla más grande.
                Información importante sobre tu salud, como las notificaciones
                de apnea del sueño. Registro de tu actividad y de todos tus
                entrenamientos, con sensores de profundidad y temperatura del
                agua. Todo esto en el Apple Watch con la carga más rápida hasta
                ahora.
              </p>
              <p className="text-2xl text-white md:hidden block">
                Nueva armadura. Nuevas aventuras.
              </p>
              <div className="avail mt-4">
                <span className="font-medium text-base md:text-white text-[#606471]">
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
          <div className="image-wrapper h-full w-full md:w-[80%] flex items-center justify-center">
            <div className="animation-wrapper h-full">
              <div className="relative h-full  content-end ">
                <Image
                  src="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794461/aorsse6ks7xwzfqcfawv.jpg"
                  alt="Content after video"
                  width={1200} // Ancho de la imagen, ajusta según lo necesites
                  height={800} // Alto de la imagen, ajusta según lo necesites
                  className=" w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-[80vh] md:min-h-screen  w-full flex items-end justify-center">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-[80vh] md:h-screen object-cover"
          autoPlay
          muted
          loop
          playsInline
          ref={video2Ref}
        >
          <source
            src="https://res.cloudinary.com/djnpyyl6b/video/upload/v1726847337/trttbsmaedk1n2os1ppd.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta la reproducción de este video.
        </video>

        {/* Contenido sobre el video */}
        <div className="relative z-10 text-center text-white mb-32">
          <h2 className="md:text-7xl text-5xl  font-bold mb-4">AirPods 4</h2>
          <p className="text-2xl mb-5 opacity-75 max-w-[60vh] md:block hidden">
            Ajuste perfecto y comodidad excepcional durante todo el día. Una
            experiencia de audio totalmente renovada. Disponibles con
            Cancelación Activa de Ruido por primera vez en este diseño.
          </p>
          <p className="text-2xl mb-5 opacity-75 max-w-[60vh] md:hidden block ">
            Icónicos. Ahora épicos. Disponibles con Cancelación Activa de Ruido.
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
        <div className="absolute inset-0 bg-black opacity-50 h-[80vh] md:h-screen"></div>
      </section>
      <section className=" bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-8">
          {/* Caja 1 */}
          <div className="bg-[#f5f5f7] text-black flex items-center justify-center h-[85vh] md:h-[70vh]">
            <div className="relative h-full w-full text-black">
              {/* Imagen de fondo */}
              <Image
                src="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794460/bjdt89batu9cnb0xd7nj.jpg"
                alt="Background"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          <div className="bg-black text-white flex items-center justify-center  h-[85vh] md:h-[70vh]">
            <div className="relative h-full w-full">
              {/* Imagen de fondo */}
              <Image
                src="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794467/fejctqvv6nv0kbjnpfut.jpg"
                alt="Background"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          <div className="bg-[#f5f5f7] text-black flex items-center justify-center h-[85vh] md:h-[70vh]">
            <div className="relative h-full w-full text-black">
              {/* Imagen de fondo */}
              <Image
                src="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794469/d2ajawq05pxproeaq6in.jpg"
                alt="Background"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          <div className="bg-[#f5f5f7] text-black flex items-center justify-center h-[85vh] md:h-[70vh]">
            <div className="relative h-full w-full text-black">
              {/* Imagen de fondo */}
              <Image
                src="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794465/rrrbysa6eahtfntdxpjn.jpg"
                alt="Background"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Contenido centrado */}
              <div className="relative z-10 flex flex-col items-center justify-start top-10 h-full text-center">
                <h2 className="mb-4 bg-[url('https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794464/phmy9pox9dy9pr8xc73k.png')] bg-contain bg-center bg-no-repeat w-[88%] max-w-[430px] h-[48px]"></h2>
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
      <section className="w-full h-[85vh] bg-white">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={10} // Espacio entre slides
          slidesPerView={1.25} // Ver 1 slide completo y parte de otros
          centeredSlides={true} // Centra el slide activo
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Actualiza el índice activo
          className="h-full " // Ajusta la altura del swiper
          modules={[Pagination, Autoplay]}
        >
          {imageSrcs.map((src, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative h-[95%] w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={100}
                  className="md:block hidden"
                />
                <Image
                  src={imageSrcsSmall[index]}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={100}
                  className="md:hidden block"
                />
                {index !== activeIndex && (
                  <div className="absolute inset-0 bg-gray-500 bg-opacity-50"></div>
                )}
                {index === activeIndex && (
                  <>
                    {/* Este div se posiciona absolutamente en el centro y encima de todo */}
                    <div className="absolute md:hidden top-0 left-0 w-full h-full flex flex-col items-center justify-start z-50">
                      <div className="text-white p-4 rounded-lg">
                        {/* Imagen 1 */}
                        <div className="relative w-[68px] h-[33px]  mx-auto mb-4">
                          <Image
                            src="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726794291/ka2w0thf5ozdkjbn0ioj.png" // Reemplaza con la ruta de la imagen 1
                            alt="Imagen 1"
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        {/* Imagen 2 */}
                        <div className="relative w-[220px] h-[54px]  mx-auto">
                          <Image
                            src={imageSrcsLogo[index]} // Reemplaza con la ruta de la imagen 2
                            alt="Imagen 2"
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="absolute md:hidden top-0 left-0 w-full h-full flex flex-col items-center justify-end z-50">
                      <div className="text-white p-4 rounded-lg">
                        {/* Texto 1 */}
                        <div className="mb-4 text-center">
                          <p className="text-2xl font-semibold">
                            {texts[index].title || "Texto 1"}
                          </p>
                        </div>
                        {/* Texto 2 */}
                        <div className="mb-4 text-center">
                          <p className="text-lg font-medium">
                            {texts[index].description1 || "Texto 2"}
                          </p>
                        </div>
                        {/* Botón */}
                        <div className="text-center">
                          <button className="bg-white text-black py-3 px-6 rounded-full hover:bg-black hover:text-white transition-all">
                            Ver ahora
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="md:absolute hidden inset-0 md:flex items-center justify-center text-center p-4">
                      <div className="flex flex-col items-center justify-between w-full">
                        <div className="flex items-center w-full absolute bottom-16 pl-16 gap-5">
                          <button className="bg-white text-black py-3 px-6 rounded-full">
                            Ver ahora
                          </button>
                          <div className="flex gap-5 items-center">
                            <p className="text-white mb-1 text-xl font-semibold">
                              {texts[index].title || "Texto 1"}
                            </p>
                            <p className="text-white text-lg">
                              {texts[index].description1 || "Texto 2"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </section>
    </main>
  );
}
