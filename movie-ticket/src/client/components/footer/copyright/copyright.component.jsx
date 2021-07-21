import React from "react";
import { useStyles } from "./copyright-style.component";
import { Link, Container } from "@material-ui/core";

function CopyRight() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.left}>
          <p>
            Bản quyền © 2021 thuộc về{" "}
            <Link href="#" className={classes.copyRight}>
              Movie Ticket
            </Link>
          </p>
        </div>
        <div className={classes.right}>
          <Link href="#" className={classes.link}>
            Điều khoản sử dụng
          </Link>
          <Link href="#" className={classes.link}>
            Chính sách bảo mật
          </Link>
          <Link href="#" className={classes.link}>
            Câu hỏi thường gặp
          </Link>
          <Link href="#" className={classes.link}>
            Phản hồi
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default CopyRight;
