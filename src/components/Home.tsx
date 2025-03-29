import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slices/todoSlice";
import { TTodo } from "../constants/TodoType";

interface IRootState {
  todo: {
    isLoading: boolean;
    data: TTodo[];
  };
}

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state: IRootState) => state?.todo);
  return (
    <div>
      <h3>Now we are going to call api through redux</h3>
      <button onClick={() => dispatch(fetchTodos())}>Fetch Data</button>
      {isLoading && <h1>Loading...</h1>}
      {data?.map((item: TTodo, index: number) => {
        return <h4 key={index}>{item.title}</h4>;
      })}
    </div>
  );
};

export default Home;
