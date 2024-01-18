"use client";
import { useOrder } from "@/features/PaymentGatewayService/Order/useOrder";
import styles from "./page.module.css";

export default function ConfirmationPage() {
  const { orderLine } = useOrder();

  if (!orderLine) return;

  return (
    <main className={styles.root}>
      <p>Resumen del pedido</p>
      <p>Realizar el pago</p>
    </main>
  );
}
