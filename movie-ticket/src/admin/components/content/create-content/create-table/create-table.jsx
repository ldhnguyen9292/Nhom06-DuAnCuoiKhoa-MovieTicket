import React, { memo } from "react";
import TableTop from "./table-top/table-top";
import TableBottom from "./table-bottom/table-bottom";

function CreateTable(props) {
  const {
    array,
    arrayTableHead,
    handleDelete,
    handleEdit,
    putKey,
    typePutKey,
    name,
    keysText,
  } = props;
  return (
    <div>
      <TableTop putKey={putKey} typePutKey={typePutKey} />
      <TableBottom
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

export default memo(CreateTable);
