import { useState } from "react";
import carsData, {setCarData} from './carsData'


export default function CarCard({car,setRentVehicle,setPage,carsData,onFavs}){

const [like,setLike] = useState(car.favourite)
    
const likeIt = () =>{
    setCarData(car.id,"favourite",!like)
    setLike(carsData.find(x=>x.id==car.id).favourite)
    console.log(carsData.find(x=>x.id==car.id))
    
}

    return (
        <div className="text-center carCard">
            <div className="cardTop d-flex">
                <p className="fw-bold">{car.brand+" "+ car.model}</p>
                <button onClick={likeIt} className="favouriteBtn">{like || carsData.find(x=>x.id==car.id).favourite ?  <img src="./src/Images/Icons/isfav.png" style={{transform:'scale(1.3)'}}/>:<img src="./src/Images/Icons/unfav.png"/>}</button>
            </div>
            <div className="card-body p-0">
                <div className="d-flex w-100 justify-content-end ">
                    
                </div>
                <div className="carPreview my-1 my-md-0">
                    <p className="carType">{car.type}</p>
                    <img className="zoomIn" src={car.images[0]} alt="car_image" />
                </div>
                <div className="info">
                    <p className="carPrice">Price: R{car.price}/h</p>
                    <p>Seats: {car.seats}</p>
                </div>
                <button onClick={()=>{setRentVehicle(car.id);setPage("rent")}} className="btn btnAnim viewCarBtn">View Vehicle</button>
            </div>
            <div className="card-footer text-muted ">{HourConverter(car.available)}</div>
        </div>
    );
}


export  function HourConverter(hour){

    if(hour<=0){return `Available Now`}
    if(hour==1){return `Available in ${hour} Hour`}
    if(hour<=24){return `Available in ${hour} Hours`}
    if(hour>=25 && hour<168){return `Available in ${Math.ceil(hour/24)} days`}
    if(hour>=168 && hour<=336){return `Available in ${Math.floor((hour/24)/7)} week`}
    else{return `Available in ${Math.ceil((hour/24)/7)} weeks`}

}
