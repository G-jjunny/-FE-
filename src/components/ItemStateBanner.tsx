import React from "react";
import styles from "../styles/components/ItemStateBanner.module.scss";
import { FaArrowAltCircleUp } from "react-icons/fa";

interface totalPrice {
  totalPrice: number;
}

const ItemStateBanner: React.FC<totalPrice> = ({ totalPrice }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.itemStateBanner}>
      <div className={styles.banner}>
        <div>총 가격 : {totalPrice}</div>
        <div className={styles.toTop} onClick={scrollToTop}>
          <FaArrowAltCircleUp />
        </div>
      </div>
    </div>
  );
};

export default ItemStateBanner;
