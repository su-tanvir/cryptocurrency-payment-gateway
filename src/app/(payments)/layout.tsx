import { mulish } from "@/lib/assets/fonts/googleFonts";
import "@/lib/assets/styles/globals.css";
import Script from "next/script";
import styles from "./layout.module.css";

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
        <Script src="wallet-address-validator.min.js" />
      </head>
      <body className={mulish.className}>
        <div className={styles.app}>
          {children}
          <footer>I am Bitnovo footer</footer>
        </div>
      </body>
    </html>
  );
}
