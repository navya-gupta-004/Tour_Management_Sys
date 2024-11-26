import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/travel logo.png";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quick__links2 = [
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const contactDetails = [
  {
    icon: "ri-map-pin-line",
    label: "Address",
    value: "Pune, Mumbai",
  },
  {
    icon: "ri-mail-line",
    label: "Email",
    value: "TravelAgency@gmail.com",
  },
  {
    icon: "ri-phone-line",
    label: "Mobile Number",
    value: "+9335787685",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo and Social Links */}
          <Col lg="3" md="6" sm="12" className="mb-4">
            <div className="footer__logo">
              <img src={logo} alt="Logo" className="footer__logo-img" />
              <p className="footer__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                non arcu tincidunt, feugiat velit at, suscipit leo.
              </p>
              <div className="social__links d-flex align-items-center gap-3">
                <Link to="#" className="footer__social-link">
                  <i className="ri-youtube-line"></i>
                </Link>
                <Link to="#" className="footer__social-link">
                  <i className="ri-instagram-line"></i>
                </Link>
                <Link to="#" className="footer__social-link">
                  <i className="ri-twitter-line"></i>
                </Link>
              </div>
            </div>
          </Col>

          {/* Quick Links: Discover */}
          <Col lg="3" md="4" sm="4" className="mb-4">
            <h5 className="footer__title">Discover</h5>
            <ListGroup className="footer__list">
              {quick__links.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="p-0 mb-2 footer__list-item"
                >
                  <Link to={item.path} className="footer__link">
                    {item.display}
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Quick Links: User Links */}
          <Col lg="3" md="4" sm="4" className="mb-4">
            <h5 className="footer__title">User Links</h5>
            <ListGroup className="footer__list">
              {quick__links2.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="p-0 mb-2 footer__list-item"
                >
                  <Link to={item.path} className="footer__link">
                    {item.display}
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="4" className="mb-4">
            <h5 className="footer__title">Contact</h5>
            <ListGroup>
              {contactDetails.map((contact, index) => (
                <ListGroupItem
                  key={index}
                  className="p-0 mb-2 footer__list-item"
                >
                  <h6 className="mb-0 footer__link">
                    <span>
                      <i className={contact.icon}></i>
                    </span>{" "}
                    {contact.label}:
                  </h6>
                  <p className=" mb-0 footer__link value">{contact.value}</p>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-4">
          <Col lg="12" className="text-center">
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()} TravelAgency. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
