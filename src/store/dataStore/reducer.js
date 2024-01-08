import Cookies from "js-cookie";

const cookiePreferences = (() => {
  try {
    return JSON.parse(Cookies.get("preferences")) || {};
  } catch (error) {
    return {};
  }
})();

const InitialState = {
  allData: [],
  startDate: cookiePreferences.startDate || "4/10/2022",
  endDate: cookiePreferences.endDate || "5/10/2022",
  selectedBarValue: "A",
  age: cookiePreferences.age || "15-25",
  gender: cookiePreferences.gender || "Male",
};

export const dataReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return {
        ...state,
        allData: action.payload,
      };

    case "DATE_RANGE":
      cookiePreferences.startDate = action.payload.start;
      cookiePreferences.endDate = action.payload.end;
      Cookies.set("preferences", JSON.stringify(cookiePreferences));
      return {
        ...state,
        startDate: action.payload.start,
        endDate: action.payload.end,
      };

    case "AGE_SELECTED":
      cookiePreferences.age = action.payload;
      Cookies.set("preferences", JSON.stringify(cookiePreferences));
      return { ...state, age: action.payload };

    case "GENDER_SELECTED":
      cookiePreferences.gender = action.payload;
      Cookies.set("preferences", JSON.stringify(cookiePreferences));
      return { ...state, gender: action.payload };

    case "BAR_VALUE_SELECTED":
      return { ...state, selectedBarValue: action.payload };

    case "CLEAR_PREFERENCES":
      Cookies.remove("preferences");

      return {
        ...state,
        startDate: "4/10/2022",
        endDate: "5/10/2022",
        age: "15-25",
        gender: "Male",
      };

    default:
      return state;
  }
};
