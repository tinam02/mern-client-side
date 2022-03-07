import React, { useState, useEffect } from "react";
import { Alert, FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/Testing";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    loginUser,
    setupUser,
  } = useAppContext();
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };
  const onSubmit = (evt) => {
    // check for values if one is missing throw alert

    evt.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login successful!",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "Register successful!",
      });
    }
    console.log(values);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet" : "Already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="btn btn-block"
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
