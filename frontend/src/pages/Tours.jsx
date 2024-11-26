import React, { useState, useEffect } from "react";
import "./../Styles/tours.css";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../Shared/CommonSection";
import SearchBar from "./../Shared/searchBar";
import TourCard from "./../Shared/TourCard";
//import tourData from "../assets/data/tours";
import useFetch from "../hooks/useFetch";
//import { BASE_URL } from "../utils/config";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`http://localhost:5555/api/v1/tours?page=${page}`);
  const { data: tourCount } = useFetch(
    `http://localhost:5555/api/v1/tours/search/getTourCount`
  );

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8); // we will use backend data count
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);
  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}

          {!loading && !error && (
            <Row>
              {tours?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {/* {Array.from(
                    { length: pageCount },
                    (_, index) => index + 1 */}
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default Tours;
