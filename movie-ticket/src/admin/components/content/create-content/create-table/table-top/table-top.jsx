import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./table-top-styles";

function TableTop(props) {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { putKey, typePutKey } = props;

  const handleChange = (event) => {
    dispatch(putKey(typePutKey, { pageSize: parseInt(event.target.value) }));
  };

  const onSubmit = (data) => {
    dispatch(putKey(typePutKey, { keySearch: data.keySearch }));
  };

  const renderTop = () => {
    return (
      <div className={classes.top}>
        <div className={classes.resultBox}>
          <span>Results: </span>
          <select
            name="items"
            id="items"
            className={classes.selectBox}
            onChange={handleChange}
          >
            {[7, 10, 20, 50].map((value) => {
              return (
                <option key={`pageSize-${value}`} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.searchBox}>
          <input
            type="text"
            className={classes.inputSearch}
            placeholder="Search..."
            name="keySearch"
            {...register("keySearch")}
          />
          <button type="submit" className={classes.searchIcon}>
            <SearchIcon />
          </button>
        </form>
      </div>
    );
  };

  return <>{renderTop()}</>;
}

export default memo(TableTop);
