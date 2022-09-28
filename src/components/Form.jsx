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
    <div>
      <form
        action="#"
        class="relative rounded-lg bg-white shadow dark:bg-gray-700"
      >
        <div class="flex items-start justify-between rounded-t p-4 dark:border-gray-600">
          <h3 class="text-xl font-semibold  text-indigo-500 dark:text-white">
            Add new patient
          </h3>
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

        <div class="space-y-6 p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  type="text"
                  class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder=""
                />
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select
                  class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  type="text"
                  class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder=""
                />
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select
                  class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-gray-700 block">Full name</span>
                <div className="flex gap-5 mt-3 text-base px-1">
                  <div className="">
                    <input type="radio" name="radio" id="male" class="" />
                    <label for="male" class="ml-3">
                      Radio Two
                    </label>
                  </div>
                  <div className="">
                    <input type="radio" name="radio" id="female" class="" />
                    <label for="female" class="ml-3">
                      Radio Two
                    </label>
                  </div>
                </div>
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-gray-700">When is your event?</span>
                <input
                  type="date"
                  class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                />
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  type="text"
                  class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder=""
                />
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-gray-700">Additional details</span>
                <textarea
                  class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  rows="3"
                ></textarea>
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select
                  class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select
                  class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                >
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        {isCreate && (
          <div class="flex items-center space-x-2 rounded-b justify-center  border-gray-200 p-6 ">
            <button
              onClick={() => {
                notifyToast("check");
                setIsCreate(false);
                setOpenModal(false);
              }}
              type="submit"
              class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save all
            </button>
            <button
              onClick={() => {
                setIsCreate(false);
                setOpenModal(false);
              }}
              type="submit"
              class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </button>
          </div>
        )}
        {isEdit && (
          <div class="flex items-center space-x-2 rounded-b justify-center  border-gray-200 p-6 ">
            <button
              onClick={() => {
                notifyToast("check");
                setIsEdit(false);
                setIsDropOpen(false);
                setOpenModal(false);
              }}
              type="submit"
              class="rounded-lg bg-amber-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
