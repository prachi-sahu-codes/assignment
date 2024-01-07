const InitialState = {
  allData: [],
};

export const dataReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return {
        ...state,
        allData: action.payload,
      };

    default:
      return state;
  }
};
