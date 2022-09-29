import { patientInfo } from "./data";
import Dropdown from "../Dropdown";

export const patients = patientInfo.map((row) => {
  return (
    <tr className="border-b bg-white hover:bg-gray-50 ">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-[#54BAB9] focus:ring-2 focus:ring-[#54BAB9] "
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 "
      >
        {row.id}
      </th>
      <td className="py-4 px-6">{row.petname}</td>
      <td className="py-4 px-6">
        <span className="text-amber-400">{row.status}</span>
      </td>
      <td className="py-4 px-6">{row.pawrent}</td>
      <td className="py-4 px-6">{row.breed}</td>
      <td className="py-4 px-6">{row.gender}</td>
      <td className="py-4 px-6">{row.dob}</td>
      <td className="py-4 px-6">{row.phone}</td>
      <td className="py-4 px-6">{row.address}</td>
      <td className="py-4 px-6">
        <Dropdown />
      </td>
    </tr>
  );
});
