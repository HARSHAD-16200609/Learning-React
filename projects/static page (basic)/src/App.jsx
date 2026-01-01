
import './App.css'
import Productinfo from './components/Productinfo'
import nextjslogo from "../public/nextjs.svg"
import reactlogo from "./assets/react.svg"
import viteLogo from "../public/vite.svg"
function App() {

const NextjsFacts = [
  "Next.js supports multiple rendering strategies including SSR, SSG, ISR, and CSR",
  "Next.js uses file-based routing where folders and files map directly to URLs",
  "Next.js provides built-in API routes for backend logic without a separate server",
  "Next.js optimizes performance with automatic code splitting and image optimization",
  "Next.js supports server components and streaming for faster initial page loads",
];

const viteFacts = [
  "Vite uses native ES modules for instant dev server startup",
  "During development, Vite does not bundle your code",
  "Vite uses esbuild for fast dependency pre-bundling",
  "Hot Module Replacement in Vite is extremely fast and precise",
  "Vite uses Rollup to create optimized production builds",
];


const reactFacts = [
  "React uses a virtual DOM to efficiently update only the parts of the UI that change",
  "React follows a component-based architecture for building reusable UI pieces",
  "State changes in React trigger re-renders, not direct DOM updates",
  "React uses a unidirectional data flow where data moves from parent to child via props",
  "React relies on hooks like useState and useEffect for state and lifecycle management",
];


  return (
    <>  <div className="main">
      <Productinfo productImage={nextjslogo} productName="Nextjs" facts={viteFacts} />
    <Productinfo productImage={reactlogo} productName="React" facts={reactFacts} />
  <Productinfo productImage={viteLogo} productName="Vite" facts={NextjsFacts} />
    </div>
    
  </>

  )
}

export default App

