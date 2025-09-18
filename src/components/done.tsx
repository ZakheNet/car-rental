import carData from './carsData'

export default function Done(carID,setPage){
    let car = carData.find(car=>car.id==carID)
    return(
        <section className="donePage">
            <div className="completed display-5">
                <img src="../src/Images/Icons/done.png" alt="" />
                COMPLETE
            </div>
            <p className="infoDone fs-4">You have successfully rented the {car?.brand+" "+car?.model} vehicle</p>
            <button className='btnAnim fs-4 my-5 backBtn' onClick={()=>{setPage("home")}}><img src=''/> GO BACK</button>
        </section>
    )
}