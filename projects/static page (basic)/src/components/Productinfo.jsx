import reactLogo from "../assets/react.svg"

function Productinfo({productImage,productName,facts,}) {
  return (
    <div className="container">
      <div className='header'>
       <img src={productImage}></img><h2>{productName}Facts</h2>
      </div>
       <div className='content'>
<h2>Fun Facts about {productName}</h2>
<ul>
{facts.map((fact,index)=>(<li key={index}>{fact}</li>))}
</ul>
     </div>
    </div>
  )
}

export default Productinfo