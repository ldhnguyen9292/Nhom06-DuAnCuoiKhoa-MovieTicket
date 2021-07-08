import React, { memo } from "react";
import TableTop from "./table-top/table-top";
import TableBottom from "./table-bottom/table-bottom";

function CreateTable(props) {
  console.log("create table");
  return (
    <div>
      <TableTop />
      <TableBottom array={props.array} />
    </div>
  );
}

export default memo(CreateTable);
