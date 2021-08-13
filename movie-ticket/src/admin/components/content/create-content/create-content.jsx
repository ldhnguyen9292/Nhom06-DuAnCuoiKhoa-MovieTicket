import React, { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateFormInput from "./create-form-input/create-form-input";
import CreateTable from "./create-table/create-table";
import { useForm, FormProvider } from "react-hook-form";
import { useStyles } from "./create-content-styles";
import LoadingComponent from "../../../../client/components/loading/loading.component";

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
  const [loading, setLoading] = useState();

  const getDataList = async () => {
    setLoading(true);
    const res = await dispatch(
      getList(
        dbName,
        typeGetList,
        `?q=${keySearch}&page=${page}&limit=${pageSize}&sort=${sort}&order=${order}`
      )
    );
    setLoading(false);
    return res;
  };

  useEffect(() => {
    getDataList();
    return () => setLoading({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keys]);

  useEffect(() => {
    return () => {
      dispatch(
        putKey(typePutKey, { keySearch: "", page: 1, sort: "", order: "" })
      );
      setLoading({});
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
    setFocus("_id");
  };

  const onSubmit = async (data, e) => {
    if (isEdit) {
      setEdit(false);
      await dispatch(putData(dbName, data));
      getDataList();
    } else {
      handleCallAPI(data);
    }
    e.target.reset();
  };

  const cacheArrayInput = useMemo(() => arrayInput, [arrayInput]);

  if (loading) <LoadingComponent />;

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
