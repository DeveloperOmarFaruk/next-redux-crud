"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { addEmployee } from "@/redux/actions/employeeActions";
import { useDispatch } from "react-redux";

const EmployeeAdd = () => {
  const [employeeData, setEmployeeData] = useState();
  const router = useRouter();
  const dispatch = useDispatch();

  // Employee Add Function
  const handleEmployeeChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const handleEmployeeAdd = (e) => {
    e.preventDefault();
    dispatch(addEmployee(employeeData));
    router.push("/");
  };

  return (
    <>
      <div className="section">
        <h3 className="text-center text-3xl font-bold text-violet-700">
          Employee Add Form
        </h3>

        <div className=" w-full max-w-screen-sm  mt-14 mb-14 m-auto block text-center">
          <form onSubmit={handleEmployeeAdd}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                onChange={handleEmployeeChange}
                className="input input-bordered input-primary w-full "
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                onChange={handleEmployeeChange}
                className="input input-bordered input-primary w-full "
              />
            </div>

            <div className="mb-4">
              <input
                type="number"
                placeholder="Phone"
                required
                name="phone"
                onChange={handleEmployeeChange}
                className="input input-bordered input-primary w-full "
              />
            </div>

            <div className="mb-4 border border-indigo-600 p-4 pt-2 pb-2 rounded-lg">
              <label className="label text-gray-400">Gender</label>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Male</span>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleEmployeeChange}
                    className="radio checked:bg-blue-500"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Female</span>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleEmployeeChange}
                    className="radio checked:bg-blue-500"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Others</span>
                  <input
                    type="radio"
                    name="gender"
                    value="Others"
                    onChange={handleEmployeeChange}
                    className="radio checked:bg-blue-500"
                  />
                </label>
              </div>
            </div>

            <div className="mb-4">
              <textarea
                type="text"
                placeholder="Address"
                required
                name="address"
                onChange={handleEmployeeChange}
                className="input input-bordered input-primary w-full p-2 pl-4 pr-4 h-24 "
              ></textarea>
            </div>

            <div className="text-start mt-8">
              <button type="submit" className="btn btn-outline btn-primary">
                Employee Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeeAdd;
