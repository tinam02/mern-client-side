import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Testing";

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">add</Link>
        <Link to="all-jobs">all</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
