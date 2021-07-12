import React, { memo } from "react";
import { useFormContext } from "react-hook-form";
import { useStyles } from "./create-form-input-styles";
import clsx from "clsx";

function CreateFormInput(props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const classes = useStyles();
  const { arrayInput } = props;

  const createInput = (object) => {
    const { type, name, placeHolder, width, validation } = object;
    const classBonus =
      width === 25 ? classes.w25 : width === 50 ? classes.w50 : classes.w100;
    return (
      <div key={name} className={classBonus}>
        <input
          type={type}
          className={classes.input}
          placeHolder={placeHolder}
          {...register(name, { ...validation })}
        />
        {errors[name] && (
          <p className={classes.error}>{errors[name].message}</p>
        )}
      </div>
    );
  };

  const createRadio = (object) => {
    const { type, name, placeHolder, width, validation } = object;
    const classBonus =
      width === 25 ? classes.w25 : width === 50 ? classes.w50 : classes.w100;
    return (
      <div key={name} className={clsx(classes.radioBox, classBonus)}>
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

  const renderInput = (object) => {
    switch (object.type) {
      case "text":
        return createInput(object);
      case "number":
        return createInput(object);
      case "radio":
        return createRadio(object);
      default:
        return;
    }
  };

  return (
    <>
      <h4 className={classes.labelForm}>
        Form Input - ID: <input className={classes.id} {...register("id")}/>
      </h4>
      {arrayInput.map((object) => renderInput(object))}
    </>
  );
}

export default memo(CreateFormInput);
