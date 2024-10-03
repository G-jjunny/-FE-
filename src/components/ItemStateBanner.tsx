import React from "react";
import styles from "../styles/components/ItemStateBanner.module.scss";

interface totalPrice {
  totalPrice: number;
}

const ItemStateBanner: React.FC<totalPrice> = ({ totalPrice }) => {
  return (
    <div className={styles.itemStateBanner}>
      <div className={styles.banner}>
        <div>총 가격 : {totalPrice}</div>
      </div>
    </div>
  );
};

export default ItemStateBanner;
