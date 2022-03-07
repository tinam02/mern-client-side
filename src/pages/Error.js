import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/Testing";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Page not found!</h3>
        <p>Go back</p>
        <Link to='/'>Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
