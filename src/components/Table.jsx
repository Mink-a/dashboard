import React from "react";
import ReportTitle from "./ReportTitle";
import TableBody from "./TableBody";

function Table() {
  return (
    <div className="m-4 h-screen px-4 bg-white">
      <ReportTitle />
      <TableBody />
    </div>
  );
}

export default Table;
