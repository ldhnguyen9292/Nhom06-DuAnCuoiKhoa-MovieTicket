import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import { withRouter } from "react-router";

function Login() {
  return (
    <>
      <SignIn/>
    </>
  );
}

export default withRouter(Login);
