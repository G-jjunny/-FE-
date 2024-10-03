import React from "react";
import MockData from "../types/DataType";
import styles from "../styles/components/itemBox.module.scss";
import { FiDollarSign } from "react-icons/fi";

// ItemBox 컴포넌트 정의
interface ItemBoxProps {
  item: MockData;
}

const ItemBox: React.FC<ItemBoxProps> = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.itemDes}>
        <div className={styles.name}>{item.productName}</div>
        <div className={styles.date}>{item.boughtDate}</div>
      </div>
      <div className={styles.price}>
        <FiDollarSign />
        {item.price}
      </div>
    </div>
  );
};

export default ItemBox;
