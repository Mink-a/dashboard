import React from "react";
import { BsThreeDotsVertical, BsPencil } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { useState } from "react";
import Modal from "./Modal";

function Dropdown() {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const handleOpen = () => {
    setIsDropOpen(!isDropOpen);
  };
  const handleEdit = () => {
    setIsEdit(true);
    setShowModal(true);
  };
  const handleDelete = () => {
    setIsDelete(true);
    setShowModal(true);
  };
  return (
    <div>
      <span className="relative">
        <div className="dropdown">
          <label onClick={handleOpen} tabIndex={0} className="relative">
            <BsThreeDotsVertical className="cursor-pointer" />
          </label>
          {isDropOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-lg rounded bg-white rounded-box absolute right-0 top-2 w-32"
            >
              <li
                onClick={handleEdit}
                className="border-b px-2 py-1 cursor-pointer"
              >
                <a className="flex gap-3 items-center">
                  <BsPencil className="text-green-500" />
                  <span>Edit</span>
                </a>
              </li>
              <li onClick={handleDelete} className=" px-2 py-1 cursor-pointer">
                <a className="flex gap-3 items-center">
                  <FiTrash className="text-red-500" />
                  <span>Delete</span>
                </a>
              </li>
            </ul>
          )}
        </div>
      </span>
      {showModal && isDelete && (
        <Modal
          setOpenModal={setShowModal}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          setIsDropOpen={setIsDropOpen}
        />
      )}
    </div>
  );
}

export default Dropdown;
