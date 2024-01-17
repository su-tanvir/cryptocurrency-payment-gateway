"use client";
import { FC, useState } from "react";
import SelectCryptocurrency from "../../Cryptocurrency/SelectCryptocurrency/index.component";
import { Cryptocurrency } from "../../Cryptocurrency/types";
import OrderForm from "./form.component";
import styles from "./styles.module.css";

const CreateOrder: FC = () => {
  const [canSelectCrypto, setCanSelectCrypto] = useState(false);

  return (
    <div className={styles.root}>
      <OrderForm />
      {canSelectCrypto && (
        <SelectCryptocurrency
          // initialCryptoId={defaultCryptoValue.name}
          initialCryptoId={"Bitcoin Cash Test BCH"}
          cryptocurrencies={[
            {
              symbol: "BCH_TEST",
              name: "Bitcoin Cash Test BCH",
              min_amount: 0.05,
              max_amount: 20000.0,
              image:
                "https://payments.pre-bnvo.com/media/crytocurrencies/CryptoBCH_Size36_px_TT7Td9Q.png",
              blockchain: "BCH_TEST",
            },
            {
              symbol: "BTC_TEST",
              name: "Bitcoin Test BTC",
              min_amount: 0.01,
              max_amount: 10000.0,
              image:
                "https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyBTC_Size36_px_StrokeON.png",
              blockchain: "BTC_TEST",
            },
            {
              symbol: "ETH_TEST3",
              name: "Ethereum Goerli ETH",
              min_amount: 0.05,
              max_amount: 20000.0,
              image:
                "https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyETH_Size36_px_StrokeON.png",
              blockchain: "ETH_TEST3",
            },
            {
              symbol: "XRP_TEST",
              name: "Ripple Test XRP",
              min_amount: 0.01,
              max_amount: 20000.0,
              image:
                "https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyXRP_Size36_px_StrokeON.png",
              blockchain: "XRP_TEST",
            },
            {
              symbol: "USDC_TEST3",
              name: "USD Coin USDC",
              min_amount: 0.05,
              max_amount: 100.0,
              image:
                "https://payments.pre-bnvo.com/media/crytocurrencies/Property_1USDC_-_Ethereum_StrokeON.png",
              blockchain: "ETH_TEST3",
            },
          ]}
          onSelect={(crypto?: Cryptocurrency) => {
            setCanSelectCrypto(false);
            // if (crypto)
            //   setDefaultCryptoValue({ name: crypto.name, value: crypto.image });
          }}
        />
      )}
    </div>
  );
};
export default CreateOrder;
