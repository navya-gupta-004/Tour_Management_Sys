import React, { useState } from "react";
import CommonSection from "./../Shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import TourCard from "./../Shared/TourCard";

function SearchResultList() {
  const location = useLocation();
  const [data] = useState(location.state);
  //console.log(data);
  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center ">No Tour Found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4">
                  <TourCard tour={tour} key={tour._id} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SearchResultList;
