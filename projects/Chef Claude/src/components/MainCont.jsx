import IngredientsDisplay from "./Ingredients";
import chef from "../assets/chef-svgrepo-com.png";
import { useState } from "react";

function MainCont() {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [fetchedResponse,setResponse] =useState("");


  const addIngredient = () => {
    if (!inputValue.trim()) return;

    setIngredients(prev => [...prev, inputValue]);
    setInputValue("");
  };
  const getIngredients =() =>{
    return ingredients
  }

  const fetchApiResponse= ()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response)=>response.json())
    .then((data)=>setResponse(data))
  
  }

  return (
    <div className="main-cont">
      <div className="header">
        <img src={chef} />
        <h2>Chef Claude</h2>
      </div>

      <div className="content">
        <div className="input-section">
          <input
            type="text"
            placeholder="e.g. Oregano"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") addIngredient();
            }}
          />

          <button onClick={addIngredient}>+ Add Ingredient</button>
        </div>

        <div className="ingredients">
          <h1>Ingredients on hand:</h1>
          <IngredientsDisplay Ingredients={ingredients} />
        </div>
        <div className="submit">
          <h3>Ready for a recipe?</h3>
          <span>
            <h4>Generate a recipe from your list of ingredients.</h4>{" "}
            <button
            onClick={fetchApiResponse}>Get a Recipe</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MainCont;

