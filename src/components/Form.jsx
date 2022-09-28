import React from "react";
import notifyToast from "./Toast";

function Form({
  isCreate,
  setIsCreate,
  setOpenModal,
  isEdit,
  setIsEdit,
  setIsDropOpen,
}) {
  return (
    <div className="py-6 px-7">
      <form
        action="#"
        class="relative w-full rounded-lg bg-white dark:bg-gray-700"
      >
        <div className="absolute top-1 right-6">
          {isEdit && (
            <button
              onClick={() => {
                setIsDropOpen(false);
                setIsEdit(false);
                setOpenModal(false);
              }}
              type="button"
              class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="editUserModal"
            >
              <svg
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
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
              class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="editUserModal"
            >
              <svg
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          )}
        </div>
        <div class="text-center text-base rounded-t p-4 dark:border-gray-600">
          <h3 class="text-xl font-[500] mb-2 text-[#54BAB9] dark:text-white">
            {isCreate ? "Add new" : "Update"} patient
          </h3>
          <p className="text-[#444444]">
            Enter {isCreate ? "new" : "update"} patient imformation below
          </p>
        </div>

        <div class="space-y-6 p-6 w-full">
          <div class="grid grid-cols-6 w-full gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-[#444444]">Pet name</span>
                <input
                  type="text"
                  class="
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
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-[#444444]">Status</span>
                <select
                  class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Please choose status</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-[#444444]">Pawrent</span>
                <input
                  type="text"
                  class="
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
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-[#444444]">Breed</span>
                <select
                  class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Please choose status</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-[#444444] block">Gender</span>
                <div className="flex gap-5 mt-3 text-base p-1">
                  <div className="">
                    <input type="radio" name="sex" id="male" class="" />
                    <label for="male" class="ml-3">
                      Male
                    </label>
                  </div>
                  <div className="">
                    <input type="radio" name="sex" id="female" class="" />
                    <label for="female" class="ml-3">
                      Female
                    </label>
                  </div>
                </div>
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-[#444444]">Date of Birth</span>
                <input
                  type="date"
                  class="
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
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-[#444444]">Contact Phone No.</span>
                <input
                  type="text"
                  class="
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
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-[#444444]">Address</span>
                <textarea
                  class="
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
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-[#444444]">City</span>
                <select
                  class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Please choose city</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-[#444444]">Township</span>
                <select
                  class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-[#54BAB9]
                    shadow-sm
                    focus:border-[#54BAB9] focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Please choose township</option>
                  <option>Corporate event</option>
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
            <div class="flex items-center space-x-2 rounded-b justify-center  p-6 ">
              <button
                onClick={() => {
                  notifyToast("check");
                  setIsCreate(false);
                  setOpenModal(false);
                }}
                type="submit"
                class="rounded bg-[#54BAB9] px-5 py-2.5 w-40 text-center text-sm font-medium text-white hover:bg-[#3cb1af] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setIsCreate(false);
                  setOpenModal(false);
                }}
                type="submit"
                class="rounded px-5 py-2.5 text-center border w-40 border-[#ACB3C0] text-sm font-medium hover:bg-[#f9f9fa] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cancel
              </button>
            </div>
          )}
          {isEdit && (
            <div class="flex items-center space-x-2 rounded-b justify-center  p-6 ">
              <button
                onClick={() => {
                  notifyToast("check");
                  setIsEdit(false);
                  setIsDropOpen(false);
                  setOpenModal(false);
                }}
                type="submit"
                class="rounded bg-[#EDC339] px-5 py-2.5 w-40 text-center text-sm font-medium text-white hover:bg-[#ebbe2d] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setIsEdit(false);
                  setIsDropOpen(false);
                  setOpenModal(false);
                }}
                type="submit"
                class="rounded px-5 py-2.5 text-center border w-40 border-[#ACB3C0] text-sm font-medium hover:bg-[#f9f9fa] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
