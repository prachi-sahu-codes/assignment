import Cookies from 'js-cookie';

const localStorageToken = JSON.parse(localStorage.getItem("authItems"));
const cookieToken = Cookies.get('authItems');

const InitialState = {
  token: cookieToken?.token,
  loggedUser: cookieToken?.user,
  loading: false,
};

export const authReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        token: action.payload.token,
        loggedUser: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        loggedUser: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        token: action.payload.token,
        loggedUser: action.payload.user,
      };
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
