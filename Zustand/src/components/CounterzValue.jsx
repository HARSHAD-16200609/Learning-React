
import { useCounterStore } from "../store/counterStore"

function CounterzValue() {
    // selecting only necessary state/states
    const count = useCounterStore((state)=>(state.count))
  return (
    <div>count subscribed from useCounterStore
        <p>{count}</p>
    </div>
  )
}

export default CounterzValue