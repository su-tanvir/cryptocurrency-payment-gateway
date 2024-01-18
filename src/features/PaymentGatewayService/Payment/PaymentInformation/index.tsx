import { CopyIcon, WarningIcon } from "@/lib/assets/icons/icons";
import Button from "@/lib/ui/Button";
import { FC } from "react";
import { toast } from "sonner";
import styles from "./styles.module.css";

interface PaymentInformationProps {
  cryptoAmount: number;
  address: string | null;
  tagMemo: string | null;
}

const PaymentInformation: FC<PaymentInformationProps> = ({
  cryptoAmount,
  address,
  tagMemo,
}) => {
  const handleCopyClick = (value: string) => async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success("El texto se ha copiado correctamente.");
    } catch (error) {
      toast.error("Ha habido un error al copiar el texto.");
    }
  };

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <p>
          Enviar <strong>{cryptoAmount}</strong>
        </p>
        <Button onClick={handleCopyClick(String(cryptoAmount))}>
          <CopyIcon />
        </Button>
      </li>
      {address && (
        <li className={styles.item}>
          <p>{address}</p>
          <Button onClick={handleCopyClick(String(address))}>
            <CopyIcon />
          </Button>
        </li>
      )}
      {tagMemo && (
        <li className={styles.item}>
          <WarningIcon />
          <p>{`Etiqueta de destino: ${tagMemo}`}</p>
          <Button onClick={handleCopyClick(String(tagMemo))}>
            <CopyIcon />
          </Button>
        </li>
      )}
    </ul>
  );
};
export default PaymentInformation;
