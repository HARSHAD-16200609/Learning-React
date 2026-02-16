import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './App.css'

gsap.registerPlugin(useGSAP)

function App() {
  const containerRef = useRef()
  const imageRef = useRef()

  // Using context for better memory management
  const { contextSafe } = useGSAP({ scope: containerRef })

  // contextSafe ensures proper cleanup when component unmounts
  const handleMouseMove = contextSafe((e) => {
    gsap.to(imageRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: "power2.out"
    })
  })

  useGSAP(() => {
    // All GSAP animations created here are automatically cleaned up
    gsap.set(imageRef.current, { xPercent: -50, yPercent: -50 })

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, { scope: containerRef }) // Scope ensures all animations are tracked

  return (
    <div ref={containerRef}>
      <img
        ref={imageRef}
        src="/images.jpeg"
        alt="Cursor follower"
        className="cursor-image"
      />
    </div>
  )
}

export default App
