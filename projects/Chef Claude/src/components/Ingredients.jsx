import { useState } from "react"

   

function IngredientsDisplay({Ingredients}) {


  return (
  <ul>
   {Ingredients.map((Ingredient,index)=>(<li key={index}>{Ingredient}</li>))}
  </ul>
  )
}

export default IngredientsDisplay