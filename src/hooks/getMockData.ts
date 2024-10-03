import { MOCK_DATA } from "../assets/MockData";
import MockData from "../types/DataType";

export const getMockData = (
  pageNum: number
): Promise<{ datas: MockData[]; isEnd: boolean }> => {
  const PER_PAGE = 10;
  return new Promise((resolve) => {
    setTimeout(() => {
      const datas: MockData[] = MOCK_DATA.slice(
        PER_PAGE * pageNum,
        PER_PAGE * (pageNum + 1)
      );
      const isEnd = PER_PAGE * (pageNum + 1) >= MOCK_DATA.length;

      resolve({ datas, isEnd });
    }, 1500);
  });
};
