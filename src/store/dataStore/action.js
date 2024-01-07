import { toast } from "react-toastify";
import { getAllDataService } from "../../api/services/dataServices";

export const getAllData = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await getAllDataService();
    if (res.status === 201) {
      const { data } = res.data;

      dispatch({
        type: "GET_ALL_DATA",
        payload: data,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
    }
  } catch (e) {
    dispatch({
      type: "LOADING",
      payload: false,
    });
    console.log("Error:", e);
  }
};
