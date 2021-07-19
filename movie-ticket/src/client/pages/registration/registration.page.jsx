import React from "react";
import SignUp from "./../../components/sign-up/sign-up.component";
import { withRouter } from "react-router";

function Registration() {
  return (
    <>
      <SignUp />
    </>
  );
}

export default withRouter(Registration);
