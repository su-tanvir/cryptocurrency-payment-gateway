import QRCode from "qrcode.react";
import { FC } from "react";
import styles from "./styles.module.css";

interface GeneratePaymentQrWalletAddressProps {
  cryptoSymbol: string;
  cryptoAddress: string | null;
}

const GeneratePaymentQrWalletAddress: FC<
  GeneratePaymentQrWalletAddressProps
> = ({ cryptoSymbol, cryptoAddress }) => {
  if (!cryptoAddress) return;
  return <QRCode className={styles.root} size={152} value={cryptoAddress} />;
};
export default GeneratePaymentQrWalletAddress;
