import axios from "axios";
import {
  EMPLOYEE_FETCH_ITEMS,
  EMPLOYEE_ADD_ITEM,
  EMPLOYEE_UPDATE_ITEM,
  EMPLOYEE_DELETE_ITEM,
} from "./types";
import { toast } from "react-toastify";

// const URL = `https://6679422c18a459f6394edd18.mockapi.io/crud`;
const URL = `${process.env.REACT_APP_URL}`;

export const fetchEmployees = () => async (dispatch) => {
  const res = await axios.get(`${URL}`);
  const result = await res.data;
  dispatch({ type: EMPLOYEE_FETCH_ITEMS, payload: result });
};

export const deleteEmployee = (id) => async (dispatch) => {
  await axios.delete(`${URL}/${id}`);
  dispatch({ type: EMPLOYEE_DELETE_ITEM, payload: id });
};

export const addEmployee = (addData) => async (dispatch) => {
  const res = await axios.post(`${URL}`, addData);
  const result = await res.data;
  if (result) {
    toast.success("Employee Add Successful");
  }
  dispatch({ type: EMPLOYEE_ADD_ITEM, payload: result });
};

export const updateEmployee = (updateData) => async (dispatch) => {
  const res = await axios.put(`${URL}/${updateData.id}`, updateData);
  const result = await res.data;
  if (result) {
    toast.success("Employee Update Successful");
  }
  dispatch({ type: EMPLOYEE_UPDATE_ITEM, payload: result });
};
