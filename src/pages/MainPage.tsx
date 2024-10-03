import React, { useCallback, useEffect, useRef, useState } from "react";
import ItemBox from "../components/ItemBox";
import MockData from "../types/DataType";
import ItemStateBanner from "../components/ItemStateBanner";
import { getMockData } from "../hooks/getMockData";
import Loading from "../components/Loading";

const MainPage = () => {
  const [items, setItems] = useState<MockData[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const loadMoreRef = useRef<HTMLDivElement | null>(null); // 마지막 아이템을 가리키는 ref

  // 데이터 가져오기
  useEffect(() => {
    setIsLoading(true);
    getMockData(pageNum).then(({ datas, isEnd }) => {
      setItems((prevItems) => [...prevItems, ...datas]);
      setTotalPrice(
        (prevTotal) =>
          prevTotal + datas.reduce((acc, item) => acc + item.price, 0)
      );
      setIsEnd(isEnd);
      setIsLoading(false);
    });
  }, [pageNum]);

  // IntersectionObserver로 마지막 아이템 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && !isEnd) {
          setPageNum((prevPageNum) => prevPageNum + 1); // 페이지 넘버 증가
        }
      },
      { threshold: 1.0 } // 마지막 아이템이 100% 화면에 보일 때 트리거
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [isLoading, isEnd]);

  return (
    <div className="container">
      <div className="itemArea">
        {items.map((item, index) => (
          <ItemBox item={item} key={index} />
        ))}
        {/* 마지막 아이템을 추적할 요소 */}
        {isLoading && <Loading />}
        <div ref={loadMoreRef}></div>
      </div>
      <ItemStateBanner totalPrice={totalPrice} />
    </div>
  );
};

export default MainPage;
