import React, { useState } from "react";
import { useStyles } from "./subscribe-styles";

function Subscribe() {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        type="email"
        className={classes.input}
        placeholder="Điền email của bạn"
        value={email}
        onChange={handleChange}
      />
      <button type="submit" className={classes.button}>
        Đăng ký
      </button>
    </form>
  );
}

export default Subscribe;
