import { CloseIcon } from "@/lib/assets/icons/icons";
import Button from "@/lib/ui/Button";
import { FC, useState } from "react";
import PickCryptocurrency from "../PickCryptocurrency/index.component";
import { useCryptocurrency } from "../useCryptocurrency";
import styles from "./styles.module.css";

const SelectCryptocurrency: FC = () => {
  const { toggleCryptoSelectable } = useCryptocurrency();
  const [isClosing, setIsClosing] = useState(false);

  const handleOnClose = () => {
    setIsClosing(true);
    setTimeout(function () {
      toggleCryptoSelectable();
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
        <PickCryptocurrency onClose={handleOnClose} />
      </div>
    </div>
  );
};
export default SelectCryptocurrency;
