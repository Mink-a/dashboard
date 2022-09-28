import React from "react";
import Form from "./Form";
import Delete from "./Delete";

function Modal({
  setOpenModal,
  isDelete,
  setIsDelete,
  isCreate,
  setIsCreate,
  setIsDropOpen,
  isEdit,
  setIsEdit,
}) {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-opacity-10 bg-black/30">
          <div
            className="absolute w-screen h-screen top-0 left-0 bg-black/20"
            onClick={() => setOpenModal(false)}
          ></div>
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {isCreate && (
                <Form
                  setIsCreate={setIsCreate}
                  setOpenModal={setOpenModal}
                  isCreate={isCreate}
                />
              )}

              {isDelete && (
                <Delete
                  setIsDelete={setIsDelete}
                  setOpenModal={setOpenModal}
                  setIsDropOpen={setIsDropOpen}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
