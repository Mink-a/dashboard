import React from "react";
import toast, { Toaster } from "react-hot-toast";

const notifyToast = (message) =>
  toast(
    (t) => (
      <div className="flex gap-3">
        <div>{message} successfully</div>
        <button onClick={() => toast.dismiss(t.id)}>X</button>
      </div>
    ),
    {
      icon: "X",
      id: "id",
      position: "bottom-left",
      className: "flex bg-green-500 justify-between items-center",
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
