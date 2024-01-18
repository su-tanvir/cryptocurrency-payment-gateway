import Countdown from "@/lib/ui/Countdown";
import Frame from "@/lib/ui/Frame";
import { FC } from "react";
import ChoosePayment from "../ChoosePayment";
import styles from "./styles.module.css";

interface MakePaymentProps {
  expirationDateTime: string;
  cryptoSymbol: string;
  paymentQrUri: string | null;
  cryptoAmount: number;
  address: string | null;
  tagMemo: string | null;
}

const MakePayment: FC<MakePaymentProps> = ({
  expirationDateTime,
  cryptoSymbol,
  paymentQrUri,
  cryptoAmount,
  address,
  tagMemo,
}) => {
  return (
    <section className={styles.root}>
      <h4 className={styles.title}>Resumen del pedido</h4>
      <Frame>
        <div className={styles.content}>
          <Countdown target={expirationDateTime} />
          <ChoosePayment
            cryptoSymbol={cryptoSymbol}
            cryptoAddress={paymentQrUri}
          />
        </div>
      </Frame>
    </section>
  );
};
export default MakePayment;
