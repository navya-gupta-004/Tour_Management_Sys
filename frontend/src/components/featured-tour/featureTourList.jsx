import React from "react";
import { Col } from "reactstrap";
import TourData from "../../assets/data/tours";
import TourCard from "../../Shared/TourCard";

const FeatureTourList = () => {
  return (
    <>
      {TourData?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};
export default FeatureTourList;
