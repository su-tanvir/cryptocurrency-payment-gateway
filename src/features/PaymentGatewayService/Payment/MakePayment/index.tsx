import Countdown from "@/lib/ui/Countdown";
import Frame from "@/lib/ui/Frame";
import { FC } from "react";
import styles from "./styles.module.css";

interface MakePaymentProps {
  expirationDateTime: string;
  cryptoAmount: number;
  address: string | null;
  tagMemo: string | null;
}

const MakePayment: FC<MakePaymentProps> = ({
  expirationDateTime,
  cryptoAmount,
  address,
  tagMemo,
}) => {
  // const [paymentType, setPaymentType] = useState<PaymentType>("smart-qr")

  return (
    <section className={styles.root}>
      <h4 className={styles.title}>Resumen del pedido</h4>
      <Frame>
        <div className={styles.content}>
          <Countdown target={expirationDateTime} />
        </div>
      </Frame>
    </section>
  );
};
export default MakePayment;
