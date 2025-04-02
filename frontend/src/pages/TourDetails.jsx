/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState, useContext } from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
//import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import "../Styles/tour-details.css";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import useFetch from "./../hooks/useFetch";
import { AuthContext } from "./../context/AuthContext";

//import { BASE_URL } from "./../utils/config";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  // eslint-disable-next-line no-unused-vars
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  //this is static data later we will call our API and load our data from database.
  // const tour = tourData.find((tour) => tour.id === id);

  // console.log(tour);

  //fetch data from database
  // https://tour-management-syste-backend.onrender.com

  const {
    data: tour,
    loading,
    error,
  } = useFetch(
    `https://tour-management-syste-backend.onrender.com/api/v1/tours/${id}`
  );

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (tour?.reviews) {
      setReviews(tour.reviews);
    }
  }, [tour]);

  //destructure
  const {
    photo,
    title,
    city,
    desc,
    price,

    distance,
    maxGroupSize,
    address,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    //later  we call api

    try {
      if (!user || user === undefined || user === null) alert("please sign in");

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
        createdAt: new Date().toISOString(),
      };

      const res = await fetch(
        `https://tour-management-syste-backend.onrender.com/api/v1/reviews/${id}`,
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(reviewObj),
        }
      );
      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
        return;
      }
      setReviews((prevReviews) => [reviewObj, ...prevReviews]);
      reviewMsgRef.current.value = "";
      setTourRating(null);
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <div>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt="" />
                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          class="ri-star-fill"
                          style={{ color: "var(--secondary-color" }}
                        ></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not Rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>
                      <span>
                        <i class="ri-map-pin-user-fill"></i>
                        {address}
                      </span>
                    </div>
                    <div className="tour__extra-details">
                      <span>
                        <i class="ri-map-pin-2-line"></i>
                        {city}
                      </span>
                      <span>
                        <i class="ri-money-dollar-circle-line"></i>${price}
                        /Person
                      </span>
                      <span>
                        <i class="ri-map-pin-time-line"></i>
                        {distance}km/hr
                      </span>
                      <span>
                        <i class="ri-group-line"></i>
                        {maxGroupSize}
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  <div className="tour__reviews mt-4">
                    <h4>Reviews({reviews?.length})</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} onClick={() => setTourRating(star)}>
                            {star}
                            <i className="ri-star-s-fill"></i>
                          </span>
                        ))}
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews">
                      {reviews?.length > 0 ? (
                        reviews.map((review, index) => (
                          <div className="review__item" key={index}>
                            <img src={avatar} alt="User Avatar" />
                            <div className="w-100">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5>{review.username}</h5>
                                  <p>
                                    {new Date(
                                      review.createdAt
                                    ).toLocaleDateString("en-US", options)}
                                  </p>
                                </div>
                                <span className="d-flex align-items-center">
                                  {review.rating}
                                  <i className="ri-star-s-fill"></i>
                                </span>
                              </div>
                              <h6>{review.reviewText}</h6>
                            </div>
                          </div>
                        ))
                      ) : (
                        <h6>No reviews yet. Be the first to leave one!</h6>
                      )}
                    </ListGroup>
                  </div>
                </div>
              </Col>

              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </div>
  );
};

export default TourDetails;
