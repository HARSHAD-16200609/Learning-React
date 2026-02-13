import locationsvg from "../assets/location.svg";

function TravelLocation({location}) {
  return (
    <div className="location-cont">
      <div className="location-img">
        <img src={location.img.src}></img>
      </div>
      <div className="info">
        <span>
          <img src={locationsvg}></img> <h5>{location.country}</h5>
        
            <a href={location.googleMapsLink}>
              <h6>  View on Google Maps  </h6>
            </a>
        
        </span>   
          <h2>{location.title}</h2>
          <h6>{location.dates}</h6>
          <p>{location.text}</p>
         
       
      </div>
    </div>
  );
}

export default TravelLocation;
