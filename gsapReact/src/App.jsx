import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './App.css'

gsap.registerPlugin(useGSAP)

function App() {
  const imageRef = useRef()

  useGSAP(() => {
    const xTo = gsap.quickTo(imageRef.current, "x", { duration: 0.3 })
    const yTo = gsap.quickTo(imageRef.current, "y", { duration: 0.3 })

    const handleMouseMove = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return (
    <>
      <img
        ref={imageRef}
        src="/images.jpeg"
        alt="Cursor follower"
        className="cursor-image"
      />
    </>
  )
}

export default App
