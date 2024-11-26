/* eslint-disable no-unused-vars */
import React from "react";
import { Col } from "reactstrap";
import TourData from "../../assets/data/tours";
import TourCard from "../../Shared/TourCard";
import useFetch from "../../hooks/useFetch";
//import { BASE_URL } from "../../utils/config";

const FeatureTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`http://localhost:5555/api/v1/tours/search/getFeaturedTours`);

  return (
    <>
      {loading && <h4>Loading........</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col lg="3" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};
export default FeatureTourList;
