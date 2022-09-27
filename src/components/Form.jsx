import React from "react";

function Form({ setShowForm }) {
  return (
    <div>
      <form
        action="#"
        class="relative rounded-lg bg-white shadow dark:bg-gray-700"
      >
        <div class="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Edit user
          </h3>
          <button
            onClick={() => setShowForm(false)}
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

        <div class="space-y-6 p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="first-name"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="Bonnie"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="last-name"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="Green"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="email"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="example@company.com"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="phone-number"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="phone-number"
                id="phone-number"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="e.g. +(12)3456 789"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="department"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Department
              </label>
              <input
                type="text"
                name="department"
                id="department"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="Development"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="company"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Company
              </label>
              <input
                type="number"
                name="company"
                id="company"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="123456"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="current-password"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Current Password
              </label>
              <input
                type="password"
                name="current-password"
                id="current-password"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="••••••••"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="new-password"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                type="password"
                name="new-password"
                id="new-password"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="••••••••"
                required=""
              />
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
          <button
            onClick={() => setShowForm(false)}
            type="submit"
            class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save all
          </button>
          <button
            onClick={() => setShowForm(false)}
            type="submit"
            class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
