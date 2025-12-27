import Card from "../../01 making an card using tailwind/src/components/Card.jsx"
import "./App.css"

export default function App() {
    return (
        <>
            <h1 className="text-red-500">Counter</h1>
            <div>

                <h2>Count is 37</h2>
                <button onClick={()=>{}}>Increase</button>
                <button onClick={()=>{}}>Decrease</button>
                <button onClick={()=>{}}>Reset</button>


            </div>

            <div style={{margin: "20px 0px"}}>
                <input style={
                    {
                        width: "100px",
                        borderRadius: "12px",
                        border: "2px solid grey",
                        padding: "6px"
                    }
                } type="number" value="9"
                       onChange={() => {

                       }
                       }

                ></input>
                <button onClick={()=>{ }}>Set to 69</button>
            </div>

        </>)
}