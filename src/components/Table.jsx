import React from "react";
import ReportTitle from "./ReportTitle";
import TableBody from "./TableBody";
import { Toaster } from "react-hot-toast";

function Table() {
  return (
    <div className="m-4 h-screen px-4 bg-white">
      <ReportTitle />
      <TableBody />
      <Toaster/>
    </div>
  );
}

export default Table;
