import './App.css'
import Counters from "./components/Counters.jsx"
import CounterzValue from './components/CounterzValue.jsx'
import Counterbutton from "./components/counterbtn.jsx"
import Navbar from './components/Navbar.jsx'
import Posts from './components/Posts.jsx'

function App() {
  

  return (
    <>
      {/* <Counters />
      <CounterzValue />
      <>functions subscribed from useCounterStore</>
      <Counterbutton /> */}
<Navbar />
<Posts />
    </>
  )
}

export default App
