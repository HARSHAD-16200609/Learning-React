import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    gsap.to(".box", {
      x: 200,
      repeat: -1,
      duration:1,
      yoyo:true
    })
  }, [])

  return (
    <>
    <div className="box">
    </div>
       
    </>
  )
}

export default App
