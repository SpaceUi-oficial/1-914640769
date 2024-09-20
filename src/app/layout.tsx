import localFont from "next/font/local";
import "./globals.css";
import Layout from "./components/Layouts/page";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Clone de la página de Apple. Explora productos, innovaciones y la experiencia Apple en un diseño web atractivo."
        />
        <meta
          name="keywords"
          content="clone de Apple, productos Apple, tecnología, diseño web, innovación, experiencia de usuario, desarrollo web, programación"
        />
        <meta name="author" content="Lautaro Octavio Faure" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="es" />
        <meta property="og:title" content="Clone de la Página de Apple" />
        <meta
          property="og:description"
          content="Bienvenido al clone de la página de Apple. Descubre nuestros productos y la innovación que caracteriza a Apple."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726851699/xwnegtcak3nnyknh6gsp.png"
        />
        <meta
          property="og:url"
          content="https://clone-apple-zeta.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clone de la Página de Apple" />
        <meta
          name="twitter:description"
          content="Explora el diseño y la tecnología de Apple en este clone de su página oficial."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726851699/xwnegtcak3nnyknh6gsp.png"
        />
        <meta name="twitter:site" content="@Developer_faure" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="Clone de la Página de Apple" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726851699/xwnegtcak3nnyknh6gsp.png"
        />
        <meta name="msapplication-config" content="browserconfig.xml" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="apple-touch-icon"
          content="https://res.cloudinary.com/djnpyyl6b/image/upload/v1726851699/xwnegtcak3nnyknh6gsp.png"
        />
        <title>Clone de la Página de Apple</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
