import Button from "@/lib/ui/Button";
import Dropdown from "@/lib/ui/Dropdown";
import LabelWithIcon from "@/lib/ui/LabelWithIcon";
import TextField from "@/lib/ui/TextField";
import { redirect } from "next/navigation";
import { FC, useState } from "react";
import { useCryptocurrency } from "../../Cryptocurrency/useCryptocurrency";
import { useOrder } from "../useOrder";
import styles from "./styles.module.css";

const OrderForm: FC = () => {
  const { cryptocurrency, amount, concept, setData, createOrder, status } =
    useOrder();
  const { toggleCryptoSelectable } = useCryptocurrency();
  const [error, setError] = useState<string | undefined>(undefined);

  if (status === "created") {
    redirect("/checkout/confirmation");
  }

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <h2 className={styles.title}>Crear pago</h2>
      <TextField
        id="amount"
        value={amount || ""}
        label="Importe a pagar"
        placeholder="Añade importe a pagar"
        pattern="^[0-9,]+$"
        onChange={(e) => {
          if (!isNaN(+e.target.value)) {
            if (!cryptocurrency) return;
            const n = parseFloat(e.target.value);
            if (n < cryptocurrency.min_amount) {
              setError(
                `El importe mínimo es ${cryptocurrency.min_amount} ${cryptocurrency.symbol}`
              );
            } else if (n > cryptocurrency.max_amount) {
              setError(
                `El importe máximo es ${cryptocurrency.max_amount} ${cryptocurrency.symbol}`
              );
            } else {
              setError(undefined);
              setData("amount", e.target.value);
            }
          }
        }}
        error={error}
      />
      <Dropdown
        label={
          <LabelWithIcon
            id="dropdown-label"
            text="Seleccionar moneda"
            icon="info"
          />
        }
        value={{
          name: cryptocurrency?.name || "",
          value: cryptocurrency?.image || "",
        }}
        onClick={toggleCryptoSelectable}
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
        value={concept || ""}
        label="Concepto"
        placeholder="Añade descripción del pago"
        onChange={(e) => setData("concept", e.target.value)}
      />
      <Button
        variant="primary"
        size="large"
        disabled={Boolean(error) || !amount || !cryptocurrency || !concept}
        onClick={createOrder}
      >
        <h6 className={styles.cta}>Continuar</h6>
      </Button>
    </form>
  );
};
export default OrderForm;
