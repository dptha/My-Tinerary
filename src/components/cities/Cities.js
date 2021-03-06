import React from "react";
import PicoBolivar from "../../assets/picobolivar.jpg";
import {useStateValue} from '../../StateProvider';

function CityCard(data) {

  const [{cities}] = useStateValue();

  let dataCities = data.data
  console.log(dataCities)
  
  return (
    <div>
      <div className="group-card">
        {/* First card */}
        <div className="card custom-card" style={{ width: "18rem" }}>
          <img src={PicoBolivar} class=" custom-card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Pico Bolívar</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        {/* Second card */}
        <div className="card custom-card" style={{ width: "18rem" }}>
          <img src={PicoBolivar} class="custom-card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Pico Bolívar</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        {/* Third card */}
        <div className="card custom-card" style={{ width: "18rem" }}>
          <img src={PicoBolivar} class="custom-card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Pico Bolívar</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
