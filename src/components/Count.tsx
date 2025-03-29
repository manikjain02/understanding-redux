import { useSelector } from "react-redux";

interface ICountStateType {
  countSlice: {
    count: number;
  };
}

const Count = () => {
  const { count } = useSelector((state: ICountStateType) => state?.countSlice);
  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  );
};

export default Count;
