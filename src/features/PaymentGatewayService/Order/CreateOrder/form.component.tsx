import { NameValueString } from "@/lib/types/common";
import Button from "@/lib/ui/Button";
import Dropdown from "@/lib/ui/Dropdown";
import LabelWithIcon from "@/lib/ui/LabelWithIcon";
import TextField from "@/lib/ui/TextField";
import { FC, useState } from "react";
import styles from "./styles.module.css";

const OrderForm: FC = () => {
  const [defaultCryptoValue, setDefaultCryptoValue] = useState<NameValueString>(
    {
      name: "Bitcoin Cash Test BCH",
      value:
        "https://payments.pre-bnvo.com/media/crytocurrencies/CryptoBCH_Size36_px_TT7Td9Q.png",
    }
  );

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <h2 className={styles.title}>Crear pago</h2>
      <TextField
        id="amount"
        label="Importe a pagar"
        placeholder="Añade importe a pagar"
      />
      <Dropdown
        label={
          <LabelWithIcon
            id="dropdown-label"
            text="Seleccionar moneda"
            icon="info"
          />
        }
        value={defaultCryptoValue}
        // onClick={() => {
        //   setCanSelectCrypto((previous) => !previous);
        // }}
        options={[]}
        // Not relevant for this exercise
        // options={[
        //   {
        //     name: "Bitcoin Cash Test BCH",
        //     value:
        //       "https://payments.pre-bnvo.com/media/crytocurrencies/CryptoBCH_Size36_px_TT7Td9Q.png",
        //   },
        //   {
        //     name: "Bitcoin Test BTC",
        //     value:
        //       "https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyBTC_Size36_px_StrokeON.png",
        //   },
        // ]}
        // onSelect={function (value: NameValueString): void {
        //   setDefaultCryptoValue(value);
        // }}
      />
      <TextField
        id="concept"
        label="Concepto"
        placeholder="Añade descripción del pago"
      />
      <Button
        variant="primary"
        size="large"
        disabled={true}
        onClick={() => console.log("Create order")}
      >
        <h6 className={styles.cta}>Continuar</h6>
      </Button>
    </form>
  );
};
export default OrderForm;
