import { ArrowRightIcon, TickIcon } from "@/lib/assets/icons/icons";
import Button from "@/lib/ui/Button";
import Image from "@/lib/ui/Image";
import TextField from "@/lib/ui/TextField";
import { FC, useState } from "react";
import { Cryptocurrencies, Cryptocurrency } from "../types";
import styles from "./styles.module.css";

interface PickCryptocurrencyProps {
  initialCryptoId?: string;
  cryptocurrencies: Cryptocurrencies;
  onSelect: (crypto?: Cryptocurrency) => void;
}

const PickCryptocurrency: FC<PickCryptocurrencyProps> = ({
  initialCryptoId,
  cryptocurrencies,
  onSelect,
}) => {
  const [selectedCrypto, setSelectedCrypto] = useState(
    cryptocurrencies.find((crypto) => crypto.name === initialCryptoId)
  );
  const [cryptocurrenciesFiltered, setCryptocurrenciesFiltered] =
    useState(cryptocurrencies);

  const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCryptocurrenciesFiltered(
      cryptocurrencies.filter((crypto) =>
        crypto.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleCryptoSelected = (crypto: Cryptocurrency) => {
    setSelectedCrypto(crypto);
    onSelect(crypto);
  };

  return (
    <div className={styles.root}>
      <TextField
        id="search-crypto"
        startIcon="search"
        placeholder="Buscar"
        onChange={handleSearchWord}
      />
      {cryptocurrenciesFiltered.length > 0 && (
        <ul className={styles.list}>
          {cryptocurrenciesFiltered.map((crypto) => (
            <li key={crypto.name} className={styles.item}>
              <Button
                className={styles.cryptocurrency}
                onClick={() => handleCryptoSelected(crypto)}
              >
                <Image
                  className={styles.img}
                  src={crypto.image}
                  alt={crypto.name}
                />
                <div className={styles.info}>
                  <strong className={styles.name}>{crypto.name}</strong>
                  <p className={styles.symbol}>{crypto.symbol}</p>
                </div>
                {selectedCrypto?.name === crypto.name ? (
                  <TickIcon />
                ) : (
                  <ArrowRightIcon />
                )}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default PickCryptocurrency;
