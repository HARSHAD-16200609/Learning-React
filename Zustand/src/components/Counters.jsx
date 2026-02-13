import { useCounterStore } from "../store/counterStore";

function Counters() {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div>
      <h1>Zustand Counter</h1>

      <h2>count is : {count}</h2>
      <p>
        <span>Increase count</span>
        <button onClick={increase}>Increase</button>
      </p>
      <p>
        <span>
          Decrease count<button onClick={decrease}>Decrease</button>
        </span>
      </p>
      <span>
        reset count <button onClick={reset}>Reset</button>
      </span>
    </div>
  );
}

export default Counters;
