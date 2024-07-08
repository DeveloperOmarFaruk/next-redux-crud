"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { updateEmployee } from "@/redux/actions/employeeActions";
import { useDispatch } from "react-redux";
import axios from "axios";

const EmployeeUpdate = () => {
  const router = useRouter();
  const [updateEmployeeData, setUpdateEmployeeData] = useState();
  const id = useParams();
  const URL = `${process.env.REACT_APP_URL}`;
  const dispatch = useDispatch();
  console.log(URL);

  // Employee Data Load Function
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${URL}/${id.id}`);
      try {
        const result = await res.data;
        setUpdateEmployeeData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [URL, id.id]);

  // Employee Update Function
  const handleEmployeeChange = (e) => {
    setUpdateEmployeeData({
      ...updateEmployeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmployeeUpdate = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(updateEmployeeData));
    router.push("/");
  };

  return (
    <>
      <div className="section">
        <h3 className="text-center text-3xl font-bold text-violet-700">
          Employee Update Form
        </h3>

        <div className=" w-full max-w-screen-sm  mt-14 mb-14 m-auto block text-center">
          <form onSubmit={handleEmployeeUpdate}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={updateEmployeeData && updateEmployeeData.name}
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
                value={updateEmployeeData && updateEmployeeData.email}
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
                value={updateEmployeeData && updateEmployeeData.phone}
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
                    checked={
                      updateEmployeeData && updateEmployeeData.gender === "Male"
                    }
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
                    checked={
                      updateEmployeeData &&
                      updateEmployeeData.gender === "Female"
                    }
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
                    checked={
                      updateEmployeeData &&
                      updateEmployeeData.gender === "Others"
                    }
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
                value={updateEmployeeData && updateEmployeeData.address}
                onChange={handleEmployeeChange}
                className="input input-bordered input-primary w-full p-2 pl-4 pr-4 h-24 "
              ></textarea>
            </div>

            <div className="text-start mt-8">
              <button type="submit" className="btn btn-outline btn-primary">
                Employee Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeeUpdate;
