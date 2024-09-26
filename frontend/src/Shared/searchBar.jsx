import React from "react";
import { useState } from "react";
import "./searchBar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [maxPeople, setMaxPeople] = useState("");

  const handleSearchClick = () => {
    if (!location || !distance || !maxPeople) {
      alert("All fields are required");
    } else {
      console.log("Search initiated");
    }
  };

  return (
    <Col lg="12">
      <div className="SearchBar">
        <Form className="d-flex align-items-center  gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast ">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex  gap-3 form__group form__group-fast ">
            <span>
              <i class="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="text"
                placeholder="Distance k/m"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last ">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input
                type="number"
                placeholder="0"
                value={maxPeople}
                onChange={(e) => setMaxPeople(e.target.value)}
              />
            </div>
          </FormGroup>
          <span
            className="search__icon"
            type="submit"
            onClick={handleSearchClick}
          >
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};
export default SearchBar;
