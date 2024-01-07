import { signupService, loginService } from "../../api/services/authServices";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const signUpUser =
  (input, setUserInfo, navigate) => async (dispatch) => {
    try {
      dispatch({
        type: "LOADING",
        payload: true,
      });

      const res = await signupService(input);
      if (res.status === 201) {
        const { token, user } = res.data;
        Cookies.set("authItems", JSON.stringify({ token, user }));
        dispatch({
          type: "SIGNUP",
          payload: { token, user },
        });
        dispatch({
          type: "LOADING",
          payload: false,
        });
        setUserInfo(() => ({
          username: "",
          email: "",
          password: "",
          phoneNumber: "",
        }));
        navigate("/dashboard");
        const name =
          user.username.charAt(0).toUpperCase() + user.username.slice(1);
        toast.success(`Greetings, ${name} ! Enjoy your time with us!`);
      }
    } catch (e) {
      dispatch({
        type: "LOADING",
        payload: false,
      });
      console.log("Error:", e);
      toast.error(
        e?.response?.data?.error
          ? e?.response?.data?.error
          : "Something is wrong. Please try again!"
      );
    }
  };

export const loginUser = (input, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await loginService(input);
    if (res.status === 201) {
      const { token, user } = res.data;
      localStorage.setItem("authItems", JSON.stringify({ token, user }));
      Cookies.set("authItems", JSON.stringify({ token, user }));
      dispatch({
        type: "LOGIN",
        payload: { token, user },
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
      navigate("/dashboard");
      const name =
        user.username.charAt(0).toUpperCase() + user.username.slice(1);
      toast.success(`Greetings, ${name} ! Enjoy your time with us!`);
    }
  } catch (e) {
    dispatch({
      type: "LOADING",
      payload: false,
    });
    console.log("Error:", e);
    toast.error(
      e?.response?.data?.error
        ? e?.response?.data?.error
        : "Something is wrong. Please try again!"
    );
  }
};

export const logoutHandler = (navigate) => async (dispatch) => {
  localStorage.removeItem("authItems");
  Cookies.remove("authItems");
  dispatch({
    type: "LOGOUT",
    payload: { token: null, user: null },
  });

  navigate("./");
  toast.success("Logout successful. We hope to see you again soon!");
};
