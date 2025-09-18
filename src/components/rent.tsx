import { useState } from "react";
import { HourConverter } from "./carCard";
import carsData from "./carsData";

type rental = { total: number; days: number; hours: number; reason: string };

export default function Rent({
  id,
  setPage,
  Rental,
  setRental,
  state,
  dispatch}) {
     const car = carsData.find((x) => x.id == id);
     
     const [review,setReview]=useState(0)

     console.log("review: "+review)
     
   function Rentilize(e, from) {
    let toRent = { ...Rental };
    switch (from) {
      case "rentDays":
        dispatch({ type: from, payload: e, car: car });
      case "rentHours":
        dispatch({ type: from, payload: e, car: car });
    }
    setRental(toRent);
  }

  if (car == undefined) {
    return (
      <section className="pagenotfound">
        <h1>PAGE NOT FOUND</h1>
        <p>This page or vehicle does not exist</p>
        <button onClick={() => setPage("home")}>Go Back</button>
      </section>
    );
  }

  return (
    <section className="rentInfo">
      <div className="totalFloat btnAnim flex-md-column flex-row">
        <p className="rentWas">Was: R{state.was}</p>
        <p className="rentTotal">
          Total: <strong>R{state.total}</strong>
        </p>
        <p className="rentDiscount">Save: {state.discount}%</p>
      </div>
      <div className="plans">
        <h2>PLAN:</h2>
        <h4>Vehicle rent details</h4>
        <div className="period px-4 pb-3">
          <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="btnAnim nav-link periodBtn active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Days
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="btnAnim nav-link periodBtn"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Hours
              </button>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className="tab-pane active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="periodBody w-50">
                <div className="mb-3">
                  <label htmlFor="" className="form-label fs-4">
                    Number of days:
                  </label>
                  <input
                    onChange={(e) => Rentilize(e, "rentDays")}
                    type="number"
                    className="form-control fs-5"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Days..."
                  />
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="periodBody w-50">
                <div className="mb-3">
                  <label htmlFor="" className="form-label fs-4">
                    Number of hours:
                  </label>
                  <input
                    onChange={(e) => Rentilize(e, "rentHours")}
                    type="number"
                    className="form-control fs-5"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Hours..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="purpose w-50">
            <div className="mb-3">
              <label htmlFor="" className="form-label fs-4">
                Renting resason:
              </label>
              <select
                defaultValue={"personal"}
                onChange={(e) => console.log(e.target.value)}
                className="form-select form-select-lg"
                name=""
                id=""
              >
                <option disabled value="none" defaultValue={"none"}>
                  Select one
                </option>
                <option value="personal">Personal use</option>
                <option value="entertainment">Entertainment or Media</option>
                <option value="distance">Long distance travel (400km+)</option>
                <option value="business">Business</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="vehicleData">
        <h1 className="mx-3">{car.brand + " " + car.model}</h1>
        <div className="d-flex flex-column flex-md-row">
          <div className="carImages">
            <div className="mainReview">
              <img
                className="mainPic"
                src={car.images[review]}
                alt="carPic"
              />
            </div>
            <div className="subImages">
              <img
                className="subPic"
                onClick={() => setReview(0)}
                src={car.images[0]}
              />
              <img
                className="subPic"
                onClick={() => setReview(1)}
                src={car.images[1]}
              />
              <img
                className="subPic"
                onClick={() => setReview(2)}
                src={car.images[2]}
              />
            </div>
          </div>
          <div className="carInfo p-3">
            <h4 className="infoTittle">Availability:</h4>
            <div className="availability">
              <p className="fs-4 px-3">{HourConverter(car.available)}</p>
            </div>
            <h4 className="infoTittle">Details:</h4>
            <div className="carSpecs px-3">
              <p className="fs-4">Seats: {car.seats}</p>
              <p className="fs-4">Color: {car.color}</p>
              <p className="fs-4">Type: {car.type}</p>
              <div className="description">
                <h4 className="infoTittle mt-3">Description:</h4>
                <p className="px-3 fs-4">{car.info}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkoutFoot d-flex justify-content-between m-4">
        <button
          onClick={() => setPage("home")}
          className="btn backBtnRent btnAnim bg-dark text-light"
        >
          <img className="backImgRent" src="../src/Images/Icons/back.png" alt="" />
          Back
        </button>
        <button data-bs-toggle="modal" data-bs-target="#modalId" className="btn btnAnim fs-4 btn-primary fw-bold px-4">
          <img className="rentImgStore" src="../src/Images/Icons/Store.png" alt="" />
          RENT
        </button>
      </div>

      <div className="modalConfirmation">
        

        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  REGISTRATION FORM
                </h5>
                <button
                  type="button"
                  className="btn-close btnAnim"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="COLLECT_INFO">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        First Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputPassword4" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPassword4"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputEmail1" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail1"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputPassword8" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="telephone"
                        className="form-control"
                        id="inputPassword8"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputAddress" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St, Block 7, TownAbc, 1010, CityCenter, StateZ"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputAddress2" className="form-label">
                        Lisense Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label">
                        Pick-up date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputState" className="form-label">
                        Payment Method
                      </label>
                      <select id="inputState" className="form-select">
                        <option  >Choose...</option>
                        <option>Cash</option>
                        <option>Credit Card</option>
                      </select>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label id="tsAndCs" className="form-check-label" htmlFor="gridCheck">
                          I agree to the <a href="#tsAndCs">terms</a> and <a href="#tsAndCs">conditions</a>.
                        </label>
                      </div>
                    </div>
                    <h3>Total: {state.total}</h3>
                    <div className="col-12">
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btnAnim btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button className="btn btnAnim btn-primary"
                  data-bs-dismiss="modal" onClick={()=>setPage("done")} type="button">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        <script>
          const myModal = new bootstrap.Modal(
          document.getElementById("modalId"), options, );
        </script>
      </div>

      <div className="confirmation"></div>
    </section>
  );
}
