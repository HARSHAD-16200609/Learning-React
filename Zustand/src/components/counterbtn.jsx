import { useCounterStore } from "../store/counterStore"

function Counterbutton() {
    // only subscribing to necessary states 
    const increase = useCounterStore((state)=>(state.increase))
    const decrease = useCounterStore((state)=>(state.decrease))
    const reset = useCounterStore((state)=>(state.reset))
  return (
    <div>counterbtn
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
  )
}

export default Counterbutton