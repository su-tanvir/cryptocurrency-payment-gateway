import Button from "@/lib/ui/Button";
import { FC, useState } from "react";
import { Toaster, toast } from "sonner";
import GeneratePaymentQrWalletAddress from "../GeneratePaymentQrWalletAddress";
import { PaymentType } from "../types";
import styles from "./styles.module.css";

interface ChoosePaymentProps {
  cryptoSymbol: string;
  cryptoAddress: string | null;
}

const ChoosePayment: FC<ChoosePaymentProps> = ({
  cryptoSymbol,
  cryptoAddress,
}) => {
  const [paymentType, setPaymentType] = useState<PaymentType>("smart-qr");

  const handlePaymentTypeClick = (type: PaymentType) => () => {
    if (type === "web3") {
      toast.info("Funcionalidad no disponible");
      return;
    }
    setPaymentType(type);
  };

  return (
    <div className={styles.root}>
      <Toaster position="top-right" richColors />
      <div className={styles.actions}>
        <Button
          className={`${styles.button} ${
            paymentType === "smart-qr" ? styles.isSelected : ""
          }`}
          onClick={handlePaymentTypeClick("smart-qr")}
        >
          Smart QR
        </Button>
        <Button
          className={`${styles.button} ${
            paymentType === "web3" ? styles.isSelected : ""
          }`}
          onClick={handlePaymentTypeClick("web3")}
        >
          Web3
        </Button>
      </div>
      <div className={styles.data}>
        {paymentType === "smart-qr" && (
          <GeneratePaymentQrWalletAddress
            cryptoSymbol={cryptoSymbol}
            cryptoAddress={cryptoAddress}
          />
        )}
      </div>
    </div>
  );
};
export default ChoosePayment;
