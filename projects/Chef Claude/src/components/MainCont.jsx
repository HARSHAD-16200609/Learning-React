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
        <div className="response">
          Instructions

# Spicy Garlic Butter Shrimp 🍤<br></br>

**Servings:** 2  <br></br>
**Prep Time:** 5 min  <br></br>
**Cook Time:** 10 min  <br></br>

---

## Ingredients<br></br>
- 250g shrimp, peeled and deveined  <br></br>
- 3 tbsp butter  <br></br>
- 4 garlic cloves, minced  <br></br>
- 1 tsp chili flakes (adjust to taste)  <br></br>
- 1 tbsp lemon juice  <br></br>
- Salt & pepper, to taste  <br></br>
- Fresh parsley, chopped (for garnish)  <br></br>

---

## Instructions<br></br>
1. **Prep shrimp:** Pat the shrimp dry and season with salt and pepper.<br></br>  
2. **Cook garlic:** Heat butter in a pan over medium heat. Add garlic and chili flakes, sauté for 1 minute.  <br></br>
3. **Cook shrimp:** Add shrimp to the pan and cook 2-3 minutes per side until pink and opaque.  <br></br>
4. **Add lemon:** Drizzle lemon juice over the shrimp and toss to coat. <br></br> 
5. **Serve:** Garnish with parsley and serve hot. Perfect with rice, pasta, or bread.  <br></br>

---

Enjoy your meal! 😋<br></br>

        </div>
      </div>
    </div>
  );
}

export default MainCont;

