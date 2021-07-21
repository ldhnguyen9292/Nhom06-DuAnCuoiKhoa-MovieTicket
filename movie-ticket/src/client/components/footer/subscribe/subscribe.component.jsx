import React from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "./subscribe-style.component";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { emailService } from "../../../../services/email.service";

function Subcribe() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (d) => {
    const messMid = `Email: ${d.email}`;
    const data = {
      email: d.email,
      title: "Đăng ký email thành công",
      hoTen: "bạn",
      messTop:
        "Xin chúc mừng bạn đã đăng ký thành công email. Khi có tin tức mới thì chúng tôi sẽ gửi mail cho bạn.",
      messMid,
    };
    console.log(data);
    emailService.sendEmail("template_12xtfoh", data);
    alert("Đăng ký thành công");
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.box}>
          <div className={classes.content}>
            <h3 className={classes.h3} color="#31d7a9">
              ĐĂNG KÝ MOVIE TICKET
            </h3>
            <h2 className={classes.h2}>ĐỂ NHẬN THÊM NHIỀU QUYỀN LỢI</h2>
            <div className={classes.form_container}>
              <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <input
                  className={classes.input}
                  placeholder="Điền email của bạn"
                  type="text"
                  {...register("email", { required: true })}
                />
                <Button
                  className={classes.button}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  đăng ký
                </Button>
              </form>
            </div>
            <p className={classes.p}>
              Chúng tôi tôn trọng quyền riêng tư của bạn, vì vậy chúng tôi không
              bao giờ chia sẻ thông tin của bạn
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Subcribe;
