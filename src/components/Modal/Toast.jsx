import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsCheck2Square } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const notifyToast = (message) =>
  toast(
    (t) => (
      <div className="flex gap-3">
        <div>Patient is successfully {message}!</div>
        <button onClick={() => toast.dismiss(t.id)}>
          <FaTimes className="ml-auto"/>
        </button>
      </div>
    ),
    {
      icon: <BsCheck2Square className="text-2xl"/>,
      id: "id",
      position: "bottom-left",
      className: "flex bg-[#1AB45D] justify-between items-center px-4 py-3 text-base text-white min-w-max",
    }
  );

const Toast = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default notifyToast;
