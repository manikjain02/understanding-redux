import Count from "./Count";
import { useDispatch } from "react-redux";
import { addCount, subtractCount } from "../redux/slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addCount(1))}>Increment</button>
      <Count />
      <button onClick={() => dispatch(subtractCount(1))}>Decrement</button>
    </div>
  );
};

export default Counter;
