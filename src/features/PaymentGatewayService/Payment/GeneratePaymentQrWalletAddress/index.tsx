import WAValidator from "multicoin-address-validator/dist/wallet-address-validator";
import QRCode from "qrcode.react";
import { FC } from "react";
import { findNetworkByCryptoSymbol } from "../../Cryptocurrency/cryptocurrency.util";
import styles from "./styles.module.css";

interface GeneratePaymentQrWalletAddressProps {
  cryptoSymbol: string;
  cryptoAddress: string | null;
}

const GeneratePaymentQrWalletAddress: FC<
  GeneratePaymentQrWalletAddressProps
> = ({ cryptoSymbol, cryptoAddress }) => {
  const network = findNetworkByCryptoSymbol(cryptoSymbol);

  const isValidAddress = WAValidator.validate(cryptoAddress, network);

  if (!cryptoAddress) return;
  return (
    <QRCode
      className={`${styles.root} ${!isValidAddress ? styles.isInvalid : ""}`}
      size={152}
      fgColor={isValidAddress ? "#000" : "#dc2626"}
      value={cryptoAddress}
    />
  );
};
export default GeneratePaymentQrWalletAddress;
