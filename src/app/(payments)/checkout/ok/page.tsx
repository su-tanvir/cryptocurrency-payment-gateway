"use client";
import { CHECKOUT_PATH } from "@/lib/constants/settings";
import AlertMessage from "@/lib/ui/AlertMessage";
import Button from "@/lib/ui/Button";
import Frame from "@/lib/ui/Frame";
import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./page.module.css";

const CheckoutOkPage: FC = () => {
  const router = useRouter();
  return (
    <Frame className={styles.frame}>
      <AlertMessage
        severity="success"
        title="¡Pago completado!"
        description="En breve recibirá su recibo de pago."
      />
      <Button
        variant="primary"
        size="large"
        className={styles.button}
        onClick={() => router.push(CHECKOUT_PATH)}
      >
        Crear nuevo pago
      </Button>
    </Frame>
  );
};
export default CheckoutOkPage;
