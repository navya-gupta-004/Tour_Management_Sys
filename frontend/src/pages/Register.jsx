import React, { useState, useContext } from "react";
import "./../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "./../context/AuthContext";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // Update credentials based on input fields
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Send request to the backend
      const res = await fetch(`http://localhost:5555/api/v1/auths/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Something went wrong");
        return; // Stop further execution on error
      }

      // Dispatch success action and navigate to login
      dispatch({ type: "REGISTER_SUCCESS", payload: result });
      navigate("/login");
    } catch (err) {
      alert(err.message || "Failed to register");
    }
  };

  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="4" md="6">
              <div className="login">
                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt="User Icon" />
                  </div>
                  <h2>Register</h2>
                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Username"
                        required
                        id="username" // Corrected the ID
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        id="email"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        id="password"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <Button
                      className="btn primary__btn auth__btn"
                      type="submit"
                    >
                      Create An Account
                    </Button>
                    <p style={{ color: "black" }}>
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Register;
