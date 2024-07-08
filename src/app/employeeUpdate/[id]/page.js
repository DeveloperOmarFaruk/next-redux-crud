"use client";

import EmployeeUpdate from "@/components/EmployeeUpdate";
import store from "@/redux/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  return (
    <>
      <Provider store={store}>
        <div>
          <EmployeeUpdate />
        </div>
        <ToastContainer position="top-right" />
      </Provider>
    </>
  );
};

export default page;
