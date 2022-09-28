import React from "react";
import notifyToast from "./Toast";

function Delete({ setIsDelete, setOpenModal, setIsDropOpen }) {
  return (
    <div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center w-full sm:mt-0 sm:ml-4 sm:text-left">
                  <div class="flex items-start w-full justify-between rounded-t mb-6 dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Confirmation
                    </h3>
                    <button
                      onClick={() => {
                        setIsDelete(false);
                        setOpenModal(false);
                        setIsDropOpen(false);
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
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete patient?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 flex justify-center items-center gap-5 mb-6">
              <button
                onClick={() => {
                  notifyToast("check");
                  setIsDelete(false);
                  setOpenModal(false);
                  setIsDropOpen(false);
                }}
                type="button"
                className="rounded bg-[#CD211D] px-5 py-2.5 w-40 text-center text-sm font-medium text-white hover:bg-[#e2110d] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setIsDelete(false);
                  setOpenModal(false);
                  setIsDropOpen(false);
                }}
                type="button"
                className="rounded px-5 py-2.5 text-center border w-40 border-[#ACB3C0] text-sm font-medium hover:bg-[#f9f9fa] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
