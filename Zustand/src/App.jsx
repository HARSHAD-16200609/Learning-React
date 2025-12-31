import './App.css'
import Counters from "./components/Counters.jsx"
import CounterzValue from './components/CounterzValue.jsx'
import Counterbutton from "./components/counterbtn.jsx"
function App() {
  

  return (
    <>
      <Counters />
      <CounterzValue />
      <>functions subscribed from useCounterStore</>
      <Counterbutton />
    </>
  )
}

export default App
