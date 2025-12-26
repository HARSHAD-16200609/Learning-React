function Card({title="Protagnist",imgadress,alt="anime",btnText ="Fight now"})  { 
     // values inside functions params are props we pass it in the component in app.jsx like title = "Ichigo" etc
  return (
    <div className="mt-4 max-w-50 bg-gray-100 rounded-3xl">
      <img
        className="max-h-48 object-cover rounded-xl"
        src={imgadress}
        alt={alt}
      ></img>

      <div>
        <h2 className="text-black">{title}</h2>
        <p className="text-black text-xs px-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          fugit ipsum nobis odit, quidem repellendus.
        </p>
      </div>
      <button className="mt-2 mb-2 bg-blue-700 p-2 rounded-xl hover:bg-blue-800">
    {btnText}
      </button>
    </div>
  );
}

export default Card