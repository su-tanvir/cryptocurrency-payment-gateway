import { mulish } from "@/lib/assets/fonts/googleFonts";
import "@/lib/assets/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Pasarela de pago con criptomonedas</title>
        <meta name="description" content="Pago en línea con criptomonedas" />
        <link rel="icon" href="/icon.png" type="image/x-icon" sizes="24x24" />
      </head>
      <body className={mulish.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
