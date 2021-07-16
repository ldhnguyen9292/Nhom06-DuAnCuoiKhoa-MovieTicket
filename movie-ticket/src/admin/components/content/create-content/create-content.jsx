import React, { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateFormInput from "./create-form-input/create-form-input";
import CreateTable from "./create-table/create-table";
import { useForm, FormProvider } from "react-hook-form";
import { useStyles } from "./create-content-styles";

function CreateContent(props) {
  const classes = useStyles();
  const {
    dbName,
    name,
    keysText,
    arrayText,
    arrayTableHead,
    arrayInput,
    actionsByID,
    getList,
    typeGetList,
    postNew,
    putData,
    putKey,
    typePutKey,
  } = props.contentProps;
  const dispatch = useDispatch();
  const keys = useSelector((state) => state[name][keysText]);
  const array = useSelector((state) => state[name][arrayText]);
  const { keySearch, page, pageSize, sort, order } = keys;
  const methods = useForm();
  const { setValue, setFocus } = methods;
  const [isEdit, setEdit] = useState(false);

  const getDataList = () => {
    return getList(
      dbName,
      typeGetList,
      `?q=${keySearch}&_page=${page}&_limit=${pageSize}&_sort=${sort}&_order=${order}`
    );
  };

  useEffect(() => {
    dispatch(getDataList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keys]);

  useEffect(() => {
    return () => {
      dispatch(
        putKey(typePutKey, { keySearch: "", page: 1, sort: "", order: "" })
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCallAPI = async (data) => {
    await dispatch(postNew(dbName, data));
    dispatch(getDataList());
  };

  const handleDelete = async (id) => {
    await dispatch(actionsByID(dbName, "DELETE", id));
    dispatch(getDataList());
  };

  const handleEdit = async (id) => {
    const res = await dispatch(actionsByID(dbName, "GET", id));
    arrayTableHead.map((name) => setValue(name, res.data[name]));
    setEdit(true);
    setFocus("id");
  };

  const onSubmit = async (data, e) => {
    if (isEdit) {
      setEdit(false);
      await dispatch(putData(dbName, data));
      dispatch(getDataList());
    } else {
      handleCallAPI(data);
    }
    e.target.reset();
  };

  const cacheArrayInput = useMemo(() => arrayInput, [arrayInput]);

  return (
    <div>
      <FormProvider {...methods}>
        <div className={classes.root}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className={classes.form}
          >
            <div className={classes.formInput}>
              <CreateFormInput
                arrayInput={cacheArrayInput}
                handleCallAPI={handleCallAPI}
              />
            </div>
            <div className={classes.formBtnSubmit}>
              <button type="submit" className={classes.button}>
                {!isEdit ? <span>Tạo mới</span> : <span>Chỉnh sửa</span>}
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
      <CreateTable
        array={array}
        arrayTableHead={arrayTableHead}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        putKey={putKey}
        typePutKey={typePutKey}
        name={name}
        keysText={keysText}
      />
    </div>
  );
}

export default memo(CreateContent);
