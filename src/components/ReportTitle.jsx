import React from "react";
import { BsSearch, BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import Modal from "./Modal";

function ReportTitle() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="p-4 font-[Poppins] text-sm bg-white">
        <h1 className="font-semibold mt-3 text-2xl text-[#54BAB9]">
          Patient List
        </h1>
        <div className="flex justify-between py-4">
          <div className="w-[25%]">
            <label className="relative block ">
              <input
                className="w-full bg-white placeholder:font-italitc border rounded-2xl py-2 pl-3 pr-10 focus:outline-none border-gray-300
              shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Search Table"
                type="text"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <BsSearch className="text-indigo-400 cursor-pointer" />
              </span>
            </label>
          </div>
          <div className="w-2/12">
            <button
              className="py-2 px-4 rounded-2xl inline-flex items-center gap-4 justify-center bg-[#54BAB9] w-full text-white"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <BsPlusLg />
              <span>Add New Patient</span>
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="w-[25%] flex items-center gap-4 justify-between">
            <div className="w-full">
              <select
                className="
              text-center
                    block
                    w-full
                    mt-1
                    rounded-2xl
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
              >
                <option>Status All</option>
                <option>Pending</option>
                <option>Active</option>
                <option>Other</option>
              </select>
            </div>

            <div className="w-full">
              <select
                className="
              text-center
                    block
                    w-full
                    mt-1
                    rounded-2xl
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
              >
                <option>Breed All</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="w-2/12 ml-auto">
            <div className=" flex items-center gap-4 justify-between">
              <div className="whitespace-nowrap text-sm">Rows per pages: </div>
              <select
                className="
                text-[#54BAB9]
              text-center
                    block
                    mt-1
                    w-full
                    xl:w-[50%]
                    rounded-2xl
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
              >
                <option>10</option>
                <option>5</option>
                <option>25</option>
                <option>30</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Part */}
      {showModal && <Modal setOpenModal={setShowModal} />}
    </div>
  );
}

export default ReportTitle;
