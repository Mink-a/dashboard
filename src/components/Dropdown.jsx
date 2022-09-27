import React from "react";
import { BsThreeDotsVertical, BsPencil } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { useState } from "react";

function Dropdown() {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleEdit = () => {
    setIsEdit(setIsEdit(true));
  };
  const handleDelete = () => {
    setIsDelete(setIsDelete(true));
  };
  return (
    <div>
      <span className="relative">
        <div className="dropdown">
          <label onClick={handleOpen} tabIndex={0} className="relative">
            <BsThreeDotsVertical className="cursor-pointer" />
          </label>
          {isOpen && (
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
    </div>
  );
}

export default Dropdown;