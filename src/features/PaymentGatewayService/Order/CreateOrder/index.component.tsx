import { FC } from "react";
import SelectCryptocurrency from "../../Cryptocurrency/SelectCryptocurrency/index.component";
import { useCryptocurrency } from "../../Cryptocurrency/useCryptocurrency";
import OrderForm from "./form.component";
import styles from "./styles.module.css";

const CreateOrder: FC = () => {
  const { cryptocurrencies, isCryptoSelectable } = useCryptocurrency();

  if (!cryptocurrencies) return;

  return (
    <div className={styles.root}>
      <OrderForm />
      {isCryptoSelectable && <SelectCryptocurrency />}
    </div>
  );
};
export default CreateOrder;
