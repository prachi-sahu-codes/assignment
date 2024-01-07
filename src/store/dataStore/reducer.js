const InitialState = {
  allData: [],
  startDate: "4/10/2022",
  endDate: "5/10/2022",
  selectedBarValue: "A",
  age:"15-25",
  gender:"Male"
};

export const dataReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return {
        ...state,
        allData: action.payload,
      };

    case "DATE_RANGE":
      console.log(action.payload);
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };

    case "BAR_VALUE_SELECTED":
      return { ...state, selectedBarValue: action.payload };

    default:
      return state;
  }
};
