import React, { useState, useContext } from "react";
import "./../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  //https://tour-management-syste-backend.onrender.com
  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(
        `https://tour-management-syste-backend.onrender.com/api/v1/auths/login`,
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(credentials),
        }
      );
      const result = await res.json();

      if (!res.ok) {
        dispatch({ type: "LOGIN_FAILURE", payload: result.message });
        alert("User not registered. Please register before logging in.");
        navigate("/register"); // Redirect to the registration page
        return;
      }
      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      alert("Login successful");
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
      alert("login failed");
    }
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="login">
                <div className="login__form ">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>Login</h2>
                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder="email"
                        required
                        id="email"
                        value={credentials.email}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="password"
                        placeholder="password"
                        required
                        id="password"
                        value={credentials.password}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <Button
                      className="btn primary__btn auth__btn"
                      type="submit"
                      onSubmit={handleClick}
                    >
                      Login
                    </Button>
                    <p style={{ color: "black" }}>
                      Don't have an account ?<Link to="/register">Create</Link>
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
export default Login;

// import React from "react";
// import "./../Styles/Login.css";
// import { Link } from "react-router-dom";
// const Login = () => {
//   return (
//     <div className="body">
//       <div className="box">
//         <div className="form-box">
//           <form action="">
//             <h1>Login</h1>
//             <div className="input-box">
//               <input type="text" placeholder="Username" />
//               <i class="ri-user-fill"></i>
//             </div>
//             <div className="input-box">
//               <input type="text" placeholder="Password" />
//               <i class="ri-lock-2-fill"></i>
//             </div>
//             <button className="submit">Login</button>
//             <p>
//               Don't Have an account?<Link to="/register">Create Account</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
