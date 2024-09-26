import React from "react";
import "./../Styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg1 from "./../assets/images/hero-img01.jpg";
import heroImg2 from "./../assets/images/hero-img02.jpg";
import heroVideo from "./../assets/images/hero-video.mp4";
import worldImg from "./../assets/images/world.png";
import Subtitle from "./../Shared/Subtitle";
import SearchBar from "../Shared/searchBar";
import FeatureTourList from "../components/featured-tour/featureTourList";

const Home = () => {
  return (
    <div className="home">
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Travelling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Perhaps travel cannot prevent bigotry, but by demonstrating
                  that all peoples cry, laugh, eat, worry, and die, it can
                  introduce the idea that if we try and understand each other,
                  we may even become friends
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg1} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* =================featured tour section start============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="featured__tour-title">
                <i>Our Featured tours</i>
              </h2>
            </Col>
            <FeatureTourList />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
