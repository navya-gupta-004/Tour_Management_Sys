import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./tour-card.css";

const TourCard = ({ tour }) => {
  const { id, title, city, price, reviews, avgRating, photo } = tour;

  return (
    <div>
      <Card>
        <div className="tour__img">
          <img src={photo} alt="" />
          <span>Featured</span>
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center hustify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i>
              {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i>
              {avgRating}
              <span>{reviews.length}</span>
            </span>
          </div>
          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>
          <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span>/person</span>
            </h5>
            <button>
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;

// import React from "react";

// const TourCard = () => {
//   return <>tourCard</>;
// };
// export default TourCard;
