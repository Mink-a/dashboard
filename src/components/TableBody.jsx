import React from "react";
import { TiWarning } from "react-icons/ti";

import Dropdown from "./Dropdown";

function TableBody() {
  return (
    <div className="">
      <div className="relative">
        <table className="w-full text-sm text-left dark:text-gray-400">
          <thead className="text-sm text-[#54BAB9] border-y-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-[#54BAB9] bg-gray-100 rounded border-gray-300 focus:ring-[#54BAB9] dark:focus:ring-[#54BAB9] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                Pet Name
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Pawrent
              </th>
              <th scope="col" className="py-3 px-6">
                Breed
              </th>
              <th scope="col" className="py-3 px-6">
                Gender
              </th>
              <th scope="col" className="py-3 px-6">
                Date of Birth
              </th>
              <th scope="col" className="py-3 px-6">
                Contact Ph No.
              </th>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-[#54BAB9] bg-gray-100 rounded border-gray-300 focus:ring-[#54BAB9] dark:focus:ring-[#54BAB9] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                B-0025
              </th>
              <td className="py-4 px-6">Milo</td>
              <td className="py-4 px-6">
                <span className="text-amber-400">
                  <TiWarning />
                </span>
              </td>
              <td className="py-4 px-6">The Nu San</td>
              <td className="py-4 px-6">Beagle</td>
              <td className="py-4 px-6">Male</td>
              <td className="py-4 px-6">1.5.2021</td>
              <td className="py-4 px-6">09797122499</td>
              <td className="py-4 px-6">
                တိုက်(၅)၊ အခန်း(၀၀၁)၊ လှိုင်သီရိအိမ်ရာ, Hlaing, Yangon
              </td>
              <td className="py-4 px-6">
                <Dropdown />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableBody;
