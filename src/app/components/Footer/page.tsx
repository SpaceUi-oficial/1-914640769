// src/components/Footer.tsx
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Contenido del footer sin centrado */}
        <div className="text-gray-400 text-sm mb-4">
          {/* Dividiendo el texto en 4 partes */}
          <p className="mb-4">
            Apple Intelligence estará disponible próximamente este año en
            versión beta con una actualización de iOS 18 en todos los modelos de
            iPhone 16, en el iPhone 15 Pro y en el iPhone 15 Pro Max, con Siri y
            el idioma del dispositivo configurados en inglés de Estados Unidos.
            Algunas funcionalidades y la disponibilidad en otros idiomas se irán
            agregando en el transcurso del próximo año.
          </p>
          <p className="mb-4">
            Dos modelos disponibles: AirPods 4 y AirPods 4 con Cancelación
            Activa de Ruido.
          </p>
          <p className="mb-4">
            Apple TV+ requiere suscripción. Sujeto a restricciones y otros
            <span className="underline"> términos.</span>
          </p>
          <p>
            El precio de Apple TV+ se muestra en dólares estadounidenses y puede
            variar según el país.
          </p>

          {/* Línea divisora */}
          <hr className="my-4 border-gray-300" />
        </div>

        {/* Contenido de las columnas */}
        <div className="grid grid-cols-4 gap-4 text-gray-400 text-sm mb-4">
          {/* Columna 1 con la primera palabra en negro */}
          <div className="flex flex-col gap-2">
            <p className="text-black">Descubrir</p>
            <p>Mac</p>
            <p>iPad</p>
            <p>iPhone</p>
            <p>Watch</p>
            <p>AirPods</p>
            <p>TV y Casa</p>
            <p>AirTag</p>
            <p className="text-black mt-5">Apple Wallet</p>
            <p>Apple Pay</p>
          </div>

          {/* Columna 2 con la primera palabra en negro */}
          <div className="flex flex-col gap-2">
            <p className="text-black">Cuenta</p>
            <p>Administrar tu Apple ID</p>
            <p>iCloud.com</p>
            <p className="text-black mt-5">Entretenimiento</p>
            <p>Apple One</p>
            <p>Apple TV+</p>
            <p>Apple Music</p>
            <p>Apple Arcade</p>
            <p>Apple Podcasts</p>
            <p>Apple Books</p>
            <p>App Store</p>
          </div>

          {/* Columna 3 con la primera palabra en negro */}
          <div className="flex flex-col space-y-2">
            <p className="text-black">Para la empresa</p>
            <p>Apple y la empresa</p>
          </div>

          {/* Columna 4 con la primera palabra en negro */}
          <div className="flex flex-col gap-2">
            <p className="text-black">Valores de Apple</p>
            <p>Accesibilidad</p>
            <p>Medio ambiente</p>
            <p>Privacidad</p>
            <p className="text-black mt-5">Acerca de Apple</p>
            <p>Newsroom</p>
            <p>Directivos de Apple</p>
            <p>Oportunidades laborales</p>
            <p>Inversionistas</p>
            <p>Ética y cumplimiento de políticas</p>
            <p>Eventos</p>
            <p>Contactar a Apple</p>
          </div>
        </div>

        {/* Texto adicional y línea divisora */}
        <div className="text-gray-400 text-sm mb-4">
          <p className="mb-4">
            <Link className=" text-blue-500 underline" href={"#1"}>
              Busca un distribuidor 
            </Link>{" "}
            cerca de ti.
          </p>
          <hr className="my-4 border-gray-300" />
        </div>

        {/* Nuevas tres columnas */}
        <div className="grid grid-cols-3 gap-4 text-gray-400 text-xs">
          {/* Columna 1 */}
          <div>
            <p>Copyright © 2024 Apple Inc. Todos los derechos reservados.</p>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col space-y-2">
            <p>Política de privacidad | Aviso legal | Mapa del sitio</p>
          </div>

          {/* Columna 3 */}
          <div className="flex flex-col space-y-2">
            <p>América Latina y el Caribe | English</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
