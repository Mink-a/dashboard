import React from "react";
import { patients } from "./data/Patients";

function TableBody() {
  return (
    <div className="">
      <div className="">
        <table className="w-full text-left text-sm ">
          <thead className="border-y-2 bg-gray-50 text-sm text-[#54BAB9] ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-[#54BAB9] focus:ring-2 focus:ring-[#54BAB9] "
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
          <tbody>{patients}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TableBody;
