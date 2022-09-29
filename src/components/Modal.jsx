import React from "react";
import Form from "./Modal/Form";
import Delete from "./Modal/Delete";
import { motion } from "framer-motion";

function Modal({
  setOpenModal,
  isDelete,
  setIsDelete,
  setIsDropOpen,
  isCreate,
  setIsCreate,
  isEdit,
  setIsEdit,
}) {
  return (
    <div>
      <div className="">
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden  font-normal outline-none focus:outline-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0  h-screen w-screen bg-black/50"></div>
          </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex w-full max-w-3xl flex-col rounded-lg border-0  outline-none focus:outline-none"
            >
              {isCreate && (
                <Form
                  setIsCreate={setIsCreate}
                  setOpenModal={setOpenModal}
                  isCreate={isCreate}
                />
              )}

              {isEdit && (
                <Form
                  setOpenModal={setOpenModal}
                  setIsEdit={setIsEdit}
                  isEdit={isEdit}
                  setIsDropOpen={setIsDropOpen}
                />
              )}

              {isDelete && (
                <Delete
                  setIsDelete={setIsDelete}
                  setOpenModal={setOpenModal}
                  setIsDropOpen={setIsDropOpen}
                />
              )}
            </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
