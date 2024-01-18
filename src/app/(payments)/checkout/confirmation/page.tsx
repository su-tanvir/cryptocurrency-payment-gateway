"use client";
import DetailOrderSummary from "@/features/PaymentGatewayService/Order/DetailOrderSummary";
import { useOrder } from "@/features/PaymentGatewayService/Order/useOrder";
import MakePayment from "@/features/PaymentGatewayService/Payment/MakePayment";
import { CHECKOUT_PATH } from "@/lib/constants/settings";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import styles from "./page.module.css";

export default function ConfirmationPage() {
  const { orderLine } = useOrder();

  if (!orderLine) redirect(CHECKOUT_PATH);

  const {
    fiatAmount,
    fiat,
    cryptocurrency,
    createdAt,
    notes,
    expirationDateTime,
    cryptoAmount,
    paymentUri,
    address,
    tagMemo,
  } = orderLine;

  return (
    <main className={styles.root}>
      <Toaster position="top-right" richColors />
      <DetailOrderSummary
        amount={fiatAmount}
        fiat={fiat}
        cryptocurrency={cryptocurrency}
        createdDate={createdAt}
        notes={notes}
      />
      <MakePayment
        expirationDateTime={expirationDateTime}
        cryptoSymbol={cryptocurrency.symbol}
        paymentQrUri={paymentUri}
        cryptoAmount={cryptoAmount}
        address={address}
        tagMemo={tagMemo}
      />
    </main>
  );
}
