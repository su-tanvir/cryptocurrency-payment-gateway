"use client";
import DetailOrderSummary from "@/features/PaymentGatewayService/Order/DetailOrderSummary";
import { useOrder } from "@/features/PaymentGatewayService/Order/useOrder";
import MakePayment from "@/features/PaymentGatewayService/Payment/MakePayment";
import styles from "./page.module.css";

export default function ConfirmationPage() {
  const { orderLine } = useOrder();

  if (!orderLine) return;

  const {
    fiatAmount,
    fiat,
    cryptocurrency,
    createdAt,
    notes,
    expirationDateTime,
    cryptoAmount,
    address,
    tagMemo,
  } = orderLine;

  return (
    <main className={styles.root}>
      <DetailOrderSummary
        amount={fiatAmount}
        fiat={fiat}
        cryptocurrency={cryptocurrency}
        createdDate={createdAt}
        notes={notes}
      />

      <MakePayment
        expirationDateTime={expirationDateTime}
        cryptoAmount={cryptoAmount}
        address={address}
        tagMemo={tagMemo}
      />
    </main>
  );
}
