"use client";
import { useCryptocurrency } from "@/features/PaymentGatewayService/Cryptocurrency/useCryptocurrency";
import CreateOrder from "@/features/PaymentGatewayService/Order/CreateOrder/index.component";
import AlertMessage from "@/lib/ui/AlertMessage";
import Frame from "@/lib/ui/Frame";
import Loader from "@/lib/ui/Loader";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function CheckoutPage() {
  const { status, getCryptocurrencies } = useCryptocurrency();

  useEffect(() => {
    getCryptocurrencies();
  }, [getCryptocurrencies]);

  return (
    <main className={styles.root}>
      <Frame>
        {status === "loading" || status === "idle" ? (
          <Loader type="dots" className={styles.loader} />
        ) : status === "error" ? (
          <AlertMessage
            severity="error"
            title="¡Error!"
            description="Lo sentimos, se ha producido un error."
          />
        ) : (
          <CreateOrder />
        )}
      </Frame>
    </main>
  );
}
