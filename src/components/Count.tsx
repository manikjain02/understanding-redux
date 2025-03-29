import { useSelector } from "react-redux";
import { getCountSelector } from "../redux/store";

// interface ICountStateType {
//   countSlice: {
//     count: number;
//   };
// }

const Count = () => {
  // const { count } = useSelector((state: ICountStateType) => state?.countSlice);
  const countData = useSelector(getCountSelector);
  return (
    <div>
      <h3>Count: {countData.count}</h3>
    </div>
  );
};

export default Count;
