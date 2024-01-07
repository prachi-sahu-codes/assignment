import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { Loader } from "./components";
import { Login, SignUp, Dashboard } from "./pages";
import RequiresAuth from "./auth/RequiresAuth";
import { getAllData } from "./store/dataStore/action";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  useEffect(() => {
    dispatch(getAllData());
  }, []);
  return (
    <>
      {loading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequiresAuth>
              <Dashboard />
            </RequiresAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
