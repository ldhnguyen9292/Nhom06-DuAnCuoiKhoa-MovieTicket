import React, { memo } from "react";
import TableTop from "./table-top/table-top";
import TableBottom from "./table-bottom/table-bottom";

function CreateTable(props) {
  const { array, arrayTableHead, handleDelete, handleEdit } = props;
  return (
    <div>
      <TableTop />
      <TableBottom
        array={array}
        arrayTableHead={arrayTableHead}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default memo(CreateTable);
