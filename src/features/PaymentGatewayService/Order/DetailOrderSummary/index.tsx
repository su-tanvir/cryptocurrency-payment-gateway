import { VerifyIcon } from "@/lib/assets/icons/icons";
import Image from "@/lib/ui/Image";
import { transformStringDateToLocalString } from "@/lib/utils/dateTools";
import { FC } from "react";
import { Cryptocurrency } from "../../Cryptocurrency/types";
import styles from "./styles.module.css";

interface DetailOrderSummaryProps {
  amount: number;
  fiat: string;
  cryptocurrency: Cryptocurrency;
  createdDate: string;
  notes: string;
}

const DetailOrderSummary: FC<DetailOrderSummaryProps> = ({
  amount,
  fiat,
  cryptocurrency,
  createdDate,
  notes,
}) => {
  return (
    <section className={styles.root}>
      <h4 className={styles.title}>Resumen del pedido</h4>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h5 className={styles.highlighted}>Importe:</h5>
            <h5 className={styles.highlighted}>{`${amount} ${fiat}`}</h5>
          </li>
          <li className={styles.item}>
            <p className={styles.description}>Moneda seleccionada:</p>
            <div className={styles.crypto}>
              <Image src={cryptocurrency.image} alt={cryptocurrency.symbol} />
              <p className={styles.description}>{cryptocurrency.symbol}</p>
            </div>
          </li>
          <li className={styles.item}>
            <ul className={styles.sublist}>
              <li className={styles.item}>
                <p className={styles.description}>Comercio:</p>
                <div className={styles.trade}>
                  <VerifyIcon />
                  <h6 className={styles.descriptionText}>
                    Comercio de pruebas de Semega
                  </h6>
                </div>
              </li>
              <li className={styles.item}>
                <p className={styles.description}>Fecha:</p>
                <h6 className={styles.descriptionText}>
                  {transformStringDateToLocalString(createdDate)}
                </h6>
              </li>
            </ul>
          </li>

          <li className={styles.item}>
            <p className={styles.description}>Concepto:</p>
            <h6 className={styles.descriptionText}>{notes}</h6>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default DetailOrderSummary;
