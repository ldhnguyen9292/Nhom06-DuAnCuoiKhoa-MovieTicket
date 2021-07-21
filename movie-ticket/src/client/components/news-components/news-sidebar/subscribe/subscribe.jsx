import React, { useState } from "react";
import { emailService } from "../../../../../services/email.service";
import { useStyles } from "./subscribe-styles";

function Subscribe() {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const messMid = `Email: ${email}`;
    const data = {
      email,
      title: "Đăng ký email thành công",
      hoTen: "bạn",
      messTop:
        "Xin chúc mừng bạn đã đăng ký thành công email. Khi có tin tức mới thì chúng tôi sẽ gửi mail cho bạn.",
      messMid,
    };
    emailService.sendEmail("template_12xtfoh", data);
    alert("Đăng ký thành công");
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
