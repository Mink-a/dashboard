import React, { useState } from "react";
import notifyToast from "./Toast";

function Form({
  isCreate,
  setIsCreate,
  setOpenModal,
  isEdit,
  setIsEdit,
  setIsDropOpen,
}) {
  const [formData, setFormData] = useState({
    petname: "Milo",
    status: "Food Allergy",
    pawrent: "The Nu San",
    breed: "Beagle",
    gender: "Male",
    dob: "2021-05-11",
    contact: "09797122499",
    address: "တိုက်(၅)၊ အခန်း(၀၀၁)၊ လှိုင်သီရိအိမ်ရာ, Hlaing, Yangon",
    city: "Yangon",
    township: "Hlaing",
  });
  return (
    <div className="">
      <form action="#" className="relative w-full rounded-lg bg-white py-6 px-7">
        <div className="absolute top-5 right-6">
          {isEdit && (
            <button
              onClick={() => {
                setIsDropOpen(false);
                setIsEdit(false);
                setOpenModal(false);
              }}
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 "
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          )}
          {isCreate && (
            <button
              onClick={() => {
                setIsCreate(false);
                setOpenModal(false);
              }}
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 "
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          )}
        </div>
        <div className="rounded-t p-4 text-center text-base dark:border-gray-600">
          <h3 className="mb-2 text-xl font-[500] text-[#54BAB9] ">
            {isCreate ? "Add new" : "Update"} patient
          </h3>
          <p className="text-[#444444]">
            Enter {isCreate ? "new" : "update"} patient imformation below
          </p>
        </div>

        <div className="w-full space-y-6 p-6">
          <div className="grid w-full grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label className="block">
                <span className="text-[#444444]">Pet name</span>
                <input
                  value={isEdit ? formData.petname : ""}
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#47afad] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder=""
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block">
                <span className="text-[#444444]">Status</span>
                <select
                  value={isEdit && formData.status}
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Please choose status</option>
                  <option value={formData.status} selected={isEdit && true}>
                    Food Allergy
                  </option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block">
                <span className="text-[#444444]">Pawrent</span>
                <input
                  value={isEdit && formData.pawrent}
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder=""
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block">
                <span className="text-[#444444]">Breed</span>
                <select
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Please choose status</option>
                  <option
                    value={isEdit && formData.breed}
                    selected={isEdit && true}
                  >
                    Beagle
                  </option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block">
                <span className="block text-[#444444]">Gender</span>
                <div className="mt-3 flex gap-5 p-1 text-base">
                  <div className="">
                    <input
                      type="radio"
                      name="sex"
                      id="male"
                      className=""
                      checked={isEdit && true}
                    />
                    <label htmlFor="male" className="ml-3">
                      Male
                    </label>
                  </div>
                  <div className="">
                    <input type="radio" name="sex" id="female" className="" />
                    <label htmlFor="female" className="ml-3">
                      Female
                    </label>
                  </div>
                </div>
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block">
                <span className="text-[#444444]">Date of Birth</span>
                <input
                  value={isEdit && formData.dob}
                  type="date"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block">
                <span className="text-[#444444]">Contact Phone No.</span>
                <input
                  value={isEdit && formData.contact}
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder=""
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block">
                <span className="text-[#444444]">Address</span>
                <textarea
                  value={isEdit && formData.address}
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  rows="3"
                ></textarea>
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block">
                <span className="text-[#444444]">City</span>
                <select
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Please choose city</option>
                  <option value={formData.city} selected={isEdit && true}>
                    Yangon
                  </option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block">
                <span className="text-[#444444]">Township</span>
                <select
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Please choose township</option>
                  <option value={formData.city} selected={isEdit && true}>
                    Hlaing
                  </option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className="-mt-5">
          {isCreate && (
            <div className="flex items-center justify-center space-x-2 rounded-b  p-6 ">
              <button
                onClick={() => {
                  notifyToast("created");
                  setIsCreate(false);
                  setOpenModal(false);
                }}
                type="submit"
                className="w-40 rounded bg-[#54BAB9] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3cb1af] focus:outline-none focus:ring-4 focus:ring-blue-300 "
              >
                Save
              </button>
              <button
                onClick={() => {
                  setIsCreate(false);
                  setOpenModal(false);
                }}
                type="submit"
                className="w-40 rounded border border-[#ACB3C0] px-5 py-2.5 text-center text-sm font-medium hover:bg-[#f9f9fa] focus:outline-none focus:ring-4 focus:ring-blue-300 "
              >
                Cancel
              </button>
            </div>
          )}
          {isEdit && (
            <div className="flex items-center justify-center space-x-2 rounded-b  p-6 ">
              <button
                onClick={() => {
                  notifyToast("updated");
                  setIsEdit(false);
                  setIsDropOpen(false);
                  setOpenModal(false);
                }}
                type="submit"
                className="w-40 rounded bg-[#EDC339] px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-[#ebbe2d] focus:outline-none focus:ring-4 focus:ring-blue-300 "
              >
                Update
              </button>
              <button
                onClick={() => {
                  setIsEdit(false);
                  setIsDropOpen(false);
                  setOpenModal(false);
                }}
                type="submit"
                className="w-40 rounded border border-[#ACB3C0] px-5 py-2.5 text-center text-sm font-medium hover:bg-[#f9f9fa] focus:outline-none focus:ring-4 focus:ring-blue-300 "
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
