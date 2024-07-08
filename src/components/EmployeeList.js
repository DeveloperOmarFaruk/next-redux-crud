"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployee,
  fetchEmployees,
} from "@/redux/actions/employeeActions";
import { toast } from "react-toastify";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const [loading, setLoading] = useState(true);
  const [filterGender, setFilterGender] = useState("");
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(10);
  const router = useRouter();
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employeeApp.employees);

  // Employee Data Load Function
  useEffect(() => {
    dispatch(fetchEmployees());
    setLoading(false);
  }, [dispatch]);

  // Employee Delete Function
  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
    toast.success("Employee Delete Successful");
  };

  if (loading) {
    return (
      <div className="text-center mt-80">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  // Get current posts
  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Handle page click
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Filter Data
  const genderFilter = employees.filter((item) => item.gender === filterGender);

  return (
    <>
      <div className="section">
        <div className="flex flex-wrap justify-start items-center">
          <button
            className="btn btn-outline btn-primary m-2"
            onClick={() => router.push("/employeeAdd")}
          >
            Employee Add <FontAwesomeIcon icon={faPlus} />
          </button>

          <div className="m-2">
            <select
              name="gender"
              onClick={(e) => setFilterGender(e.target.value)}
              className="border border-indigo-600 p-3 pl-2 rounded-lg cursor-pointer"
            >
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="m-2">
            <label className="input input-bordered flex items-center gap-2 btn btn-outline btn-primary border border-indigo-600">
              <input
                type="text"
                className="grow "
                placeholder="Search Name"
                onChange={(e) => setSearchName(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>

        {employees.length === 0 ? (
          <>
            <h3 className="text-center mt-20 text-2xl font-bold text-violet-700">
              No Data
            </h3>
          </>
        ) : (
          <>
            <div className="mt-12 mb-12 ml-2 mr-2">
              <table className="table">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees &&
                    employees
                      .filter((item) => {
                        if (filterGender === "Male") {
                          return item.gender === filterGender;
                        } else if (filterGender === "Female") {
                          return item.gender === filterGender;
                        } else if (filterGender === "Others") {
                          return item.gender === filterGender;
                        } else return item;
                      })
                      .slice(indexOfFirstPost, indexOfLastPost)
                      .filter((item) => {
                        if (searchName === "") {
                          return item;
                        } else {
                          return item.name
                            .toLowerCase()
                            .includes(searchName.toLowerCase());
                        }
                      })
                      .map((item, index) => (
                        <tr key={item.id}>
                          <td data-label="S. No.">{index + 1}</td>
                          <td data-label="Name">{item.name}</td>
                          <td data-label="Email">{item.email}</td>
                          <td data-label="Phone">{item.phone}</td>
                          <td data-label="Gender">{item.gender}</td>
                          <td data-label="Address">{item.address}</td>
                          <td data-label="Action">
                            <span
                              className="lg:tooltip"
                              data-tip="Employee Edit"
                            >
                              <FontAwesomeIcon
                                icon={faPenToSquare}
                                className="mr-4 cursor-pointer "
                                onClick={() =>
                                  router.push(`/employeeUpdate/${item.id}`)
                                }
                              />
                            </span>

                            <span
                              className="lg:tooltip"
                              data-tip="Employee Delete"
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="ml-4 cursor-pointer"
                                onClick={() => handleDelete(item.id)}
                              />
                            </span>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>

              <div className="text-right mt-6">
                {genderFilter !== "All" ||
                  (genderFilter !== "" && (
                    <Pagination
                      pageCount={Math.ceil(genderFilter.length / postsPerPage)}
                      handlePageClick={handlePageClick}
                    />
                  ))}

                {genderFilter == "" && (
                  <Pagination
                    pageCount={Math.ceil(employees.length / postsPerPage)}
                    handlePageClick={handlePageClick}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EmployeeList;
