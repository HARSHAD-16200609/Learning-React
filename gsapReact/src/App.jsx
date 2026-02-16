import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './App.css'

gsap.registerPlugin(useGSAP)

function App() {
  const boxRef = useRef()

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 200,
      repeat: -1,
      duration: 1,
      yoyo: true,
      ease: "power1.inOut"
    })
  })

  return (
    <>
      <div ref={boxRef} className="box"></div>
    </>
  )
}

export default App
