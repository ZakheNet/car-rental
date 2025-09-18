import { useEffect, useReducer, useState } from "react";
import CarCard from "./carCard";
import carsData from './carsData'
import Rent from './rent'
import Done from './done'

export let searchFilter={word:[""],type:{suv:true,standard:true,sedan:true,bus:true,truck:true,bike:true,bicycle:true},seats:[2,4,7,10],available:-1,favourites:false,minPrice:0,maxPrice:-1}

let  rentVehicle=1
function setRentVehicle(id: number){
  rentVehicle=id
}

export default function Home({page,setPage}){

function reducer(state,action){
  console.log(state)
  switch(action.type){
    case "rentHours":return Totalize({...state,hours:action.payload.target.value},action.car)
    case "rentDays":return Totalize({...state,days:action.payload.target.value},action.car)
  }
} 


   function Totalize(state,car){
   let total=0,discount=0,was=0;
   total+=state.days>3?((state.days*16)*car.price):((state.days*24)*car.price);
   total+=state.hours<12? state.hours*car.price:state.hours*(car.price*0.9)

   was=((state.days*24)*car.price)+(state.hours*car.price)
   
   let percent=100-((total/was)*100)
   discount=Number.isNaN(percent)? 0:percent

   return({...state,total:Math.floor(total),discount:Math.floor(discount),was:Math.floor(was)})
}

const [Cards,setCards]=useState()
const [state,dispatch]=useReducer(reducer,{total:0,was:0,discount:0,reason:"personal",days:0,hours:0})

const [Rental,setRental]=useState({total:0,was:0,discount:0,reason:"personal",days:4,hours:1})

const [onFavs,setOnFavs]=useState(searchFilter.favourites)

function MakeCards(data){
  let result = data.map((car,index)=><CarCard onFavs={onFavs} key={index} car={car} setPage={setPage}  carsData={carsData} setRentVehicle={setRentVehicle}/>)
  setCards(result)
}



function Search(event:any,from: string){
  
  switch(from){

    case "search": searchFilter.word=event.target.value.split(" ");break;
    case "priceMin": searchFilter.minPrice=event.target.value;if(!(searchFilter.minPrice>=0)){searchFilter.minPrice=0};break;
    case "priceMax": searchFilter.maxPrice=event.target.value;if(!(searchFilter.maxPrice>0)){searchFilter.maxPrice=-1};break;
    
    case "seat2":searchFilter.seats[0]=event.target.checked? 2:0;break
    case "seat4":searchFilter.seats[1]=event.target.checked? 4:0;break
    case "seat7":searchFilter.seats[2]=event.target.checked? 7:0;break
    case "seat10":searchFilter.seats[3]=event.target.checked? 10:0;break;

    case "typeTruck":searchFilter.type.truck=event.target.checked;break
    case "typeSuv":searchFilter.type.suv=event.target.checked;break
    case "typeBicycle":searchFilter.type.bicycle=event.target.checked;break
    case "typeBus":searchFilter.type.bus=event.target.checked;break
    case "typeBike":searchFilter.type.bike=event.target.checked;break
    case "typeStandard":searchFilter.type.standard=event.target.checked;break

    case "availableIn":searchFilter.available=event.target.value;break

    case "favourite":searchFilter.favourites=!searchFilter.favourites;setOnFavs(searchFilter.favourites);break;
    
  }


    let data=carsData



    data=data.filter(car=>{
      if(searchFilter.word.length==1 && searchFilter.word[0]==""){return car}

      let wordFound=false
      searchFilter.word.forEach(word=>{
        if(word!="" && (car.brand.toLocaleLowerCase().includes(word.toLocaleLowerCase()) || car.model.toLocaleLowerCase().includes(word.toLocaleLowerCase()))){wordFound=true}
      });
      
      if(wordFound){return car}
    })
    
    data=data.filter(car=>{
      if(car.price>=searchFilter.minPrice || searchFilter.minPrice==-1){return car}
    })

    data=data.filter(car=>{
      if(car.price<=searchFilter.maxPrice || searchFilter.maxPrice==-1){return car}
    })


     data=data.filter(car=>{
      if(car.seats>=1 && car.seats<=2){
        if(searchFilter.seats[0]==2){return car}
      }

      if(car.seats>=4 && car.seats<=5){
        if(searchFilter.seats[1]==4){return car}
      }

      if(car.seats>=6 && car.seats<=8){
        if(searchFilter.seats[2]==7){return car}
      }

      if(car.seats>=9){
        if(searchFilter.seats[3]==10){return car}
      }

    })

    data=data.filter(car=>{
      if(!searchFilter.favourites){return car}
      if(car.favourite==true){return car}
    })


    data=data.filter(car=>{
      if(car.type=="Standard"){
        if(searchFilter.type.standard){return car}
      }
      if(car.type=="SUV"){
        if(searchFilter.type.suv){return car}
      }
      if(car.type=="Bus"){
        if(searchFilter.type.bus){return car}
      }
      if(car.type=="Truck"){
        if(searchFilter.type.truck){return car}
      }
      if(car.type=="Bike"){
        if(searchFilter.type.bike){return car}
      }
    })

    data=data.filter(car=>{
      if(searchFilter.available==-1){return car}
      if(car.available<=searchFilter.available){return car}
    })



  MakeCards(data)

}

useEffect(()=>MakeCards(carsData),[carsData])


 switch(page){
  case "home": return Display();
  case "done": return Done(rentVehicle,setPage);
  case "rent": return <Rent setPage={setPage} setRental={setRental} state={state} dispatch={dispatch} Rental={Rental} id={rentVehicle}/>
}

function Display(){
    return (
    <>
      <section className="customise container-fluid">
        <div className="searchBar w-100 d-flex justify-content-center">
            <input type="search" id="searchBar" onChange={(event)=>Search(event,"search")} placeholder="Search..." name="search" className="form-control rounded-pill w-50 mb-2 mb-md-0"/>
        </div>
        <div className="filterSearch">
            <img src="./src/Images/Icons/iconsetting.png" />
            <p className="fs-4 fw-bold m-0">FILTER SEARCH:</p>
        </div>
        <div className="filterHub d-flex flex-column flex-md-row">
<div className="rowA  gap-2">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="collapsed accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="true"
                    aria-controls="flush-collapseOne"
                  >
                    <img src="./src/Images/Icons/money.png" /><p className="m-1 fs-5">Budget</p>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="budgetNames mx-4 my-1">
              <div className="row">
                <div className="">
                  <label className=" ">
                    Minimum (R):
                    <input min={0} max={999} onChange={(event)=>Search(event,"priceMin")}
                      type="number"
                      className="form-control budgetInput"
                      placeholder="Enter lowest Amount..."
                      aria-label="First name"
                    />
                  </label>
                </div>
                <div className="">
                  <label className="w-auto ">
                    Maximum (R):
                    <input min={0} max={1000} onChange={(event)=>Search(event,"priceMax")}
                      type="number"
                      className="form-control budgetInput"
                      placeholder="Enter highest amount..."
                      aria-label="Last name"
                    />
                  </label>
                </div>
              </div>
            </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="collapsed accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="true"
                    aria-controls="flush-collapseTwo"
                  >
                    <img src="./src/Images/Icons/iconseat.png" /><p className="m-1 fs-5">Seats</p>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p className="fs-5">Number of seats:</p>
                    <div className="checkBoxes flex-wrap d-flex gap-5">
                        <div className="d-flex align-items-center gap-2">
                            <input  onClick={e=>Search(e,"seat2")} defaultChecked={searchFilter.seats[0]!=0} className="form-check form-check-input" type="checkbox" name="seat2" id="seat2" />
                            <label htmlFor="seat2" className="m-0 fs-5">1/2 Seats</label>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input onClick={e=>Search(e,"seat4")} defaultChecked={searchFilter.seats[1]!=0} className="form-check form-check-input" type="checkbox" name="seat4" id="seat4" />
                            <label htmlFor="seat4" className="m-0 fs-5">4 Seats</label>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input onClick={e=>Search(e,"seat7")} defaultChecked={searchFilter.seats[2]!=0} className="form-check form-check-input" type="checkbox" name="seat7" id="seat7" />
                            <label htmlFor="seat7" className="m-0 fs-5">6/8 Seats</label>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input onClick={e=>Search(e,"seat10")} defaultChecked={searchFilter.seats[3]!=0} className="form-check form-check-input" type="checkbox" name="seat10" id="seat10" />
                            <label htmlFor="seat10" className="m-0 fs-5">10+ Seats</label>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</div>
<div className="rowB ">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="collapsed accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="true"
                    aria-controls="flush-collapseThree"
                  >
                    <img src="./src/Images/Icons/iconcar.png" /><p className="m-1 fs-5">Type</p>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p className="fs-5">Vehicle Type:</p>
                    <div className="checkBoxes flex-wrap d-flex gap-5">
                        <div className="d-flex align-items-center gap-2">
                            <input onClick={(e)=>{Search(e,"typeStandard")}} defaultChecked={searchFilter.type.standard}  className="form-check form-check-input" type="checkbox" name="standard" id="" />
                            <p className="m-0 fs-5">Standard</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input onClick={(e)=>{Search(e,"typeSuv")}} defaultChecked={searchFilter.type.suv} className="form-check form-check-input" type="checkbox" name="suv" id="" />
                            <p className="m-0 fs-5">SUV</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input onClick={(e)=>{Search(e,"typeTruck")}} defaultChecked={searchFilter.type.truck} className="form-check form-check-input" type="checkbox" name="truck" id="" />
                            <p className="m-0 fs-5">Truck</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input onClick={(e)=>{Search(e,"typeBus")}} defaultChecked={searchFilter.type.bus} className="form-check form-check-input" type="checkbox" name="bus" id="" />
                            <p className="m-0 fs-5">Bus</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input onClick={(e)=>{Search(e,"typeBike")}} defaultChecked={searchFilter.type.bike} className="form-check form-check-input" type="checkbox" name="bus" id="" />
                            <p className="m-0 fs-5">Bike</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="collapsed accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="true"
                    aria-controls="flush-collapseFour"
                  >
                    <img src="./src/Images/Icons/time.png" /><p className="m-1 fs-5"> Available</p>
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                   <p className="fs-5">Available:</p>
                    <div className="checkBoxes flex-wrap d-flex gap-5">
                        <div className="d-flex align-items-center gap-2">
                            <input className="form-check form-check-input" onClick={(e)=>{Search(e,"availableIn")}} type="radio" value={0} name="availableIn" id="availnow" />
                            <label htmlFor="availnow" className="m-0 fs-5">Now</label>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input className="form-check form-check-input" onClick={(e)=>{Search(e,"availableIn")}} type="radio" value={12} name="availableIn" id="avail12" />
                            <label htmlFor="avail12" className="m-0 fs-5">In 12 hours</label>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input className="form-check form-check-input" onClick={(e)=>{Search(e,"availableIn")}} type="radio" value={48} name="availableIn" id="avail2" />
                            <label htmlFor="avail2" className="m-0 fs-5">In 2 Days</label>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input defaultChecked className="form-check form-check-input" onClick={(e)=>{Search(e,"availableIn")}} type="radio" value={-1} name="availableIn" id="availall" />
                            <label htmlFor="availall" className="m-0 fs-5">All</label>
                        </div>
                    </div>
            
                  </div>
                </div>
              </div>
            </div>
</div>
            

        </div>
        <button onClick={(e)=>Search(e,"favourite")} className={`showFavourites btnAnim ${searchFilter.favourites? "showFav":"hideFav"}`}><img src="./src/Images/Icons/favourite.png"/>Show Favourites</button>
      </section>
      <section>
        <div className="Previews justify-content-center container-md ">{Cards==""? <p className="noResult">No results found</p>:Cards}</div>
      </section>
    </>
  )
}

}
