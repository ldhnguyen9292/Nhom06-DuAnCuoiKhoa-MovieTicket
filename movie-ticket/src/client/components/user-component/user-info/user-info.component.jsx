import React, { useState } from "react";
import { useStyles } from "./user-info-styles.component";
import { TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControlLabel } from "@material-ui/core";
import Select from "@material-ui/core/Select";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import zalo from "./../../../../assets/images/zalo.png";
import fb from "./../../../../assets/images/fb.png";
import gplus from "./../../../../assets/images/g+.png";

const days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}

const months = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

const years = [];

for (let i = 1900; i <= 2021; i++) {
  years.push(i);
}

function UserInfoComponent() {
  const classes = useStyles();
  const [value, setValue] = useState("Nam");

  const [day, setDay] = useState(1);

  const handleChangeDays = (event) => {
    setDay(event.target.value);
  };

  const [month, setMonth] = useState("Tháng 1");

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  const [year, setYear] = useState(1900);

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>Thông tin tài khoản</div>
      <hr />
      <form>
        <div className={classes.item}>
          <p className={classes.nameItem}>Tên đăng nhập</p>
          <p>hainguyen0205</p>
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}>Họ và tên</p>
          <TextField
            className={classes.field}
            placeholder="Nguyễn Văn Minh Hải"
            variant="outlined"
          />
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}>Số điện thoại</p>
          <TextField
            className={classes.field}
            placeholder="0379583901"
            variant="outlined"
          />
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}>Email</p>
          <TextField
            className={classes.field}
            placeholder="hainguyen0205@gmail.com"
            variant="outlined"
          />
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}>Giới tính</p>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <div className={classes.radio}>
              <FormControlLabel value="Nam" control={<Radio />} label="Nam" />
              <FormControlLabel value="Nu" control={<Radio />} label="Nữ" />
            </div>
          </RadioGroup>
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}>Ngày sinh</p>
          <FormControl className={classes.date}>
            <Select value={day} onChange={handleChangeDays}>
              {days.map((day, index) => {
                return (
                  <MenuItem value={day} key={index}>
                    Ngày {day}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl className={classes.date}>
            <Select value={month} onChange={handleChangeMonth}>
              {months.map((m, index) => {
                return (
                  <MenuItem value={m} key={index}>
                    {m}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl className={classes.date}>
            <Select value={year} onChange={handleChangeMonth}>
              {years.map((year, index) => {
                return (
                  <MenuItem value={year} key={index}>
                    Năm {year}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}></p>
          <Button className={classes.field} variant="contained" color="primary">
            Cập Nhật
          </Button>
        </div>
      </form>
      <div className={classes.title2}>Liên kết tài khoản mạng xã hội</div>
      <hr />
      <div className={classes.box}>
        <div className={classes.itemBox}>
          <div className={classes.iright}>
            <img src={zalo}></img>
            <p>Zalo</p>
          </div>
          <Button variant="outlined" color="primary" className={classes.btn}>Liên kết</Button>
        </div>
        <div className={classes.itemBox}>
          <div className={classes.iright}>
            <img src={fb}></img>
            <p>Facebook</p>
          </div>
          <Button variant="outlined" color="primary" className={classes.btn}>Liên kết</Button>
        </div>
        <div className={classes.itemBox}>
          <div className={classes.iright}>
            <img src={gplus}></img>
            <p>Google</p>
          </div>
          <Button variant="outlined" color="primary" className={classes.btn}>Liên kết</Button>
        </div>
      </div>
    </div>
  );
}

export default UserInfoComponent;
