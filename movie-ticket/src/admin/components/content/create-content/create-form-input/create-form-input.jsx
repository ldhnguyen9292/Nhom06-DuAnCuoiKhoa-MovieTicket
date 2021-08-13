import React, { memo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useStyles } from "./create-form-input-styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import clsx from "clsx";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

function CreateFormInput(props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const classes = useStyles();
  const { arrayInput } = props;

  const createInput = (object) => {
    const { type, name, placeHolder, validation } = object;
    return (
      <div key={name}>
        <input
          type={type}
          className={classes.input}
          placeholder={placeHolder}
          {...register(name, { ...validation })}
        />
        {errors[name] && (
          <p className={classes.error}>{errors[name].message}</p>
        )}
      </div>
    );
  };

  const createRadio = (object) => {
    const { type, name, placeHolder } = object;
    return (
      <div key={name} className={classes.radioBox}>
        <h3>Chọn loại:</h3>
        {placeHolder.map((text, index) => {
          return (
            <div key={index} className={classes.radio}>
              <input
                type={type}
                name={name}
                id={text}
                value={text}
                className={classes.input}
                checked={index === 0 ? true : null}
                {...register(name)}
              />
              <label htmlFor={text}>{text}</label>
            </div>
          );
        })}
      </div>
    );
  };

  const createDate = (object) => {
    const { name } = object;
    return (
      <div>
        <Controller
          name={name}
          render={({ field: { value, onChange } }) => (
            <MuiPickersUtilsProvider
              utils={DateFnsUtils}
              key={`date-picker-${name}`}
            >
              <>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  id={`date-picker-${name}`}
                  label={name.split(/(?=[A-Z])/).join(" ")}
                  value={value}
                  onChange={onChange}
                  className={classes.date}
                />
                {errors.datePicker && (
                  <p className={classes.error}>{errors.datePicker.message}</p>
                )}
              </>
            </MuiPickersUtilsProvider>
          )}
        ></Controller>
      </div>
    );
  };

  const createDateTime = (object) => {
    const { name, validation } = object;
    return (
      <div>
        <TextField
          id={"datetime-local" + name}
          label="Time Picker"
          type="datetime-local"
          className={classes.dateTime}
          InputLabelProps={{
            shrink: true,
          }}
          {...register(name, { ...validation })}
        />
        {errors[name] && (
          <p className={classes.error}>{errors[name].message}</p>
        )}
      </div>
    );
  };

  const createTextEditor = (object) => {
    const { name } = object;
    return (
      <div key={name}>
        <Controller
          name={name}
          render={({ field: { onChange, value } }) => (
            <ReactQuill
              theme="snow"
              value={value || ""}
              onChange={onChange}
              modules={modules}
              formats={formats}
              className={classes.textEditor}
            />
          )}
        />
      </div>
    );
  };

  const renderInput = (object) => {
    switch (object.type) {
      case "text":
        return createInput(object);
      case "number":
        return createInput(object);
      case "radio":
        return createRadio(object);
      case "date":
        return createDate(object);
      case "dateTime":
        return createDateTime(object);
      case "textEditor":
        return createTextEditor(object);
      default:
        return;
    }
  };

  return (
    <>
      <h4 className={classes.labelForm}>
        Form Input - ID: <input className={classes.id} {...register("_id")} />
      </h4>
      {arrayInput.map((object, index) => {
        const { width } = object;
        const classBonus =
          width === 25
            ? classes.w25
            : width === 50
            ? classes.w50
            : classes.w100;
        return (
          <div key={index} className={clsx(classes.root, classBonus)}>
            {renderInput(object)}
          </div>
        );
      })}
    </>
  );
}

export default memo(CreateFormInput);
