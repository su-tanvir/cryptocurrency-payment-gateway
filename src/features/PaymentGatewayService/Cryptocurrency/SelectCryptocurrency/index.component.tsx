import { CloseIcon } from "@/lib/assets/icons/icons";
import Button from "@/lib/ui/Button";
import { FC, useState } from "react";
import PickCryptocurrency from "../PickCryptocurrency/index.component";
import { Cryptocurrencies, Cryptocurrency } from "../types";
import styles from "./styles.module.css";

interface SelectCryptocurrencyProps {
  initialCryptoId?: string;
  cryptocurrencies: Cryptocurrencies;
  onSelect: (crypto?: Cryptocurrency) => void;
}

const SelectCryptocurrency: FC<SelectCryptocurrencyProps> = ({
  initialCryptoId,
  cryptocurrencies,
  onSelect,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleOnClose = (crypto?: Cryptocurrency) => {
    setIsClosing(true);
    setTimeout(function () {
      onSelect(crypto);
    }, 450);
  };

  return (
    <div className={`${styles.root} ${isClosing ? styles.isClosing : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.headline}>
          <h5 className={styles.title}>Seleccionar criptomoneda</h5>
          <Button onClick={() => handleOnClose()}>
            <CloseIcon />
          </Button>
        </div>
        <PickCryptocurrency
          initialCryptoId={initialCryptoId}
          cryptocurrencies={cryptocurrencies}
          onSelect={handleOnClose}
        />
      </div>
    </div>
  );
};
export default SelectCryptocurrency;
