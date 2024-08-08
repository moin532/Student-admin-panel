import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { CgMenuBoxed } from "react-icons/cg";

import SlideBar from "./SlideBar";

const StudentManagementSystem = ({ std }) => {
  const [search, setSearch] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const students = Object.values(std);

  const filteredStudents = students
    .filter((std) => {
      const searchLower = search.toLowerCase();
      const genderMatch = selectedGender
        ? std.attributes.gender === selectedGender
        : true;
      return (
        std.attributes.firstName.toLowerCase().includes(searchLower) &&
        genderMatch
      );
    })
    .map((std) => ({
      id: std.id,
      firstName: std.attributes.firstName,
      lastName: std.attributes.lastName,
      gender: std.attributes.gender,
      parentContactNo: std.attributes.parentContactNo,
      city: std.attributes.city,
    }));

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredStudents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex">
      <SlideBar />
      <div className="flex-1 bg-violet-900 p-8 min-h-screen">
        <div className="bg-white shadow-md p-6 w-full h-max border rounded-3xl">
          <header className="flex justify-between items-center pb-4 border-b border-gray-300">
            <h1 className="text-2xl font-semibold text-blue-700">
              Students{" "}
              <span className=" ml-7   h-14  text-2xl text-violet-600 rounded-full border-2 border-gray-300">
                {std.length}
              </span>
            </h1>

            <div className="relative">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 text-black border-b-2 border-gray-400  outline-none rounded-full focus:outline-none focus:border-purple-600"
              />
              <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-700" />
            </div>

            <div className="flex items-center space-x-4">
              <CgMenuBoxed className="w-8 h-8 text-purple-700" />
              <IoIosNotifications className="w-8 h-8 text-purple-700" />

              <img
                src="./images/profile.jpg"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-gray-300"
              />
            </div>
          </header>

          <div className="flex justify-between items-center mt-4 border-b border-gray-300">
            <select
              className="border rounded px-4 py-2 text-black"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button className="bg-blue-800 text-white px-4 py-2 rounded">
              + Add a student
            </button>
          </div>

          <table className="min-w-full leading-normal mt-6">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <input type="checkbox" />
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Photo
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  City
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((student) => (
                <tr key={student.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white  text-lg">
                    <input type="checkbox" />
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {student.id}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <img
                      src="./images/profile.jpg"
                      alt="student"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                    {student.firstName}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                    {student.lastName || "null"}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                    {student.gender}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                    {student.parentContactNo || "null"}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                    {student.city || "null"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-blue-800 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-blue-800 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>

          <div className="flex justify-end mt-4">
            <span className="text-sm text-gray-600">
              {currentPage} of {totalPages}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManagementSystem;
