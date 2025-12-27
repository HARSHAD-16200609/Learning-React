import Card from "../../01 making an card using tailwind/src/components/Card.jsx"
import "./App.css"
import {useState} from "react"; // anything starting with use in react are called hooks

export default function App() {

    // we must declare the use state variable before return statement
    // syntax

    const [count , setCount] = useState(0)
    const [input,setInput] = useState()
  // count+=1   we can do this here in react
    // 0 means initial state default value can be any datattype in js null ,undefined ,
    //number,float etc.
    // in this square bracket goes varaible and an function about how will we update the variable

   function incrementHandler (){
        // setCount(numVal+1)
        // setCount(numVal+1)
        // setCount(numVal+1) // short hand notation for below but this dosen't update explicitly wwhen called repeatedly

       // technically the count should be numVal + 3, but it doesn't it is num+1 only  as all
       // useState hooks have same variable at same time the count doesn't
       // behave like an ordinary variable
       // to avoid this there is a call back in use state which take's parameter prev which has prev count val
       // so we do

       // setCount((count) => count+1) // this changes every time called ex if 3 times called count = count+3
       setCount( (count)=>Number(count)+1) // this changes every time called ex if 3 times called count = count+1 use this if one time called

       // now the count becomes numval +3

   }
   function hello (){
        console.log("hello")
   }

    function decrementHandler(){
        if(count > 0)
        setCount((prev)=>Number(prev)-1)
    }
    function reset(){
      setCount(0)
    }
    function set(numVal){
        setInput(numVal)
    }
    return (
        <>
            <h1 className="text-red-500">Counter is {count}</h1>
            <div>

                <h2>Count is {count}</h2>

                 {/*use this syntax when no parameter is to be provided to the function*/}
                {/*<button onClick={ hello}>Increase </button>*/}

                {/*// use this when function needs parameter*/}
                <button onClick={ ()=>{incrementHandler()}}>Increase </button>

                <button onClick={() => { decrementHandler()}}>Decrease</button>

                <button onClick={reset}>Reset</button>


            </div>

            <div style={{margin: "20px 0px"}}>
                <input style={
                    {
                        width: "100px",
                        borderRadius: "12px",
                        border: "2px solid grey",
                        padding: "6px"
                    }
                } type="text"

                       onBlur={(input) => input.target.value="" }
                     onChange={(input)=>{
                         set(input.target.value)


                     }}

                ></input>
                <button onClick={() => {
                 setCount(input)
                    set()
                }}>Set to {input}
                </button>
            </div>

        </>)
}