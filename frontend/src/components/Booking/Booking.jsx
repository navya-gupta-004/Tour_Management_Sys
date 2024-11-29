import React, { useState, useContext } from "react";
import "./Booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phoneNumber: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  //set data to the server
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(booking);
    navigate("/thank-you");
  };
  // try {
  //   if (!user || user === undefined || user === null) {
  //     return alert("please sign in before");
  //   }
  //   console.log("Booking data being sent:", booking);
  //   navigate("/thank-you");
  // }catch(err){
  //   alert(err.message);
  // }

  // const res = await fetch(`http://localhost:5555/api/v1/booking`, {
  //   method: "post",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   credentials: "include",
  //   body: JSON.stringify(booking),
  // });

  // const result = await res.json();

  // if (!res.ok) {
  //   return alert(result.message);
  // }
  // navigate("/thank-you");
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price}
          <span>/person</span>
        </h3>

        <span className="tour__rating d-flex align-items-center gap-1">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating}
          <span>({reviews?.length})</span>
        </span>
      </div>
      <hr />
      <div className="Booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone Number"
              id="phoneNumber"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>

        <hr />
        <div className="booking__bottom">
          <ListGroup>
            <ListGroupItem className="border-0 px-0">
              <h5 className="d-flex align-items-center gap-1">
                ${price}
                <i class="ri-close-line"></i>1 person
              </h5>
              <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              <h5>Service Charge</h5>
              <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0 total">
              <h5>Total</h5>
              <span>${totalAmount}</span>
            </ListGroupItem>
          </ListGroup>
          <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Booking;
