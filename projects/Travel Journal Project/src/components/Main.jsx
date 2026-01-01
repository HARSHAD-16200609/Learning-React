import locations from "../data.js";
import TravelLocation from "./TravelLocation.jsx";
import globe from "../assets/globe.svg"
function Main() {
  return (
    <>
   
      <div className="main">
        <div className="header">
          <img src={globe}></img>
          <h3>My Travel Journal</h3>{" "}
        </div>
        <div className="content">
          {locations.map((location) => (
            <TravelLocation location={location} key={location.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
