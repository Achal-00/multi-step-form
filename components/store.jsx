import { createContext, useReducer } from "react";

const initialState = {
  pageNo: 1,
  name: "",
  email: "",
  number: "",
  plan: "",
  planCost: 0,
  timePeriod: "",
  service: false,
  storage: false,
  profile: false,
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "CHANGE_PAGENO":
        return { ...state, pageNo: action.payload };
        break;
      case "CHANGE_NAME":
        return { ...state, name: action.payload };
        break;
      case "CHANGE_EMAIL":
        return { ...state, email: action.payload };
        break;
      case "CHANGE_NO":
        return { ...state, number: action.payload };
        break;
      case "CHANGE_PLAN":
        return { ...state, plan: action.payload };
        break;
      case "CHANGE_PLAN_COST":
        return { ...state, planCost: action.payload };
        break;
      case "CHANGE_TIME_PERIOD":
        return { ...state, timePeriod: action.payload };
        break;
      case "CHANGE_SERVICE":
        return { ...state, service: action.payload };
        break;
      case "CHANGE_STORAGE":
        return { ...state, storage: action.payload };
        break;
      case "CHANGE_PROFILE":
        return { ...state, profile: action.payload };
        break;
      default:
        throw new Error();
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
