import {
  EMPLOYEE_FETCH_ITEMS,
  EMPLOYEE_ADD_ITEM,
  EMPLOYEE_UPDATE_ITEM,
  EMPLOYEE_DELETE_ITEM,
} from "../actions/types";

const initialState = {
  employees: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_ITEMS:
      return { ...state, employees: action.payload };

    case EMPLOYEE_DELETE_ITEM:
      return {
        ...state,
        employees: state.employees.filter((item) => item.id !== action.payload),
      };

    case EMPLOYEE_ADD_ITEM:
      return { ...state, employees: [...state.employees, action.payload] };

    case EMPLOYEE_UPDATE_ITEM:
      return {
        ...state,
        employees: state.employees.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    default:
      return state;
  }
};

export default employeeReducer;
