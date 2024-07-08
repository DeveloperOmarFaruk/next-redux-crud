"use client";

import EmployeeList from "@/components/EmployeeList";
import store from "@/redux/store/store";
import Image from "next/image";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  return (
    <Provider store={store}>
      <div>
        <EmployeeList />
      </div>
      <ToastContainer position="top-right" />
    </Provider>
  );
};

export default HomePage;
