import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../store/authStore/action";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TbBrandDatabricks } from "react-icons/tb";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickSubmit = () => {
    if (userInfo.email && userInfo.password) {
      dispatch(loginUser(userInfo, navigate));
    } else {
      toast.error("Please fill in all fields with valid details.!");
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-indigo-300 to-indigo-500 text-center">
      <div className="w-96 sm:w-3/4 md:w-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-50 bg-opacity-30 rounded-md p-5 shadow-md">
        <div className="text-indigo-500">
          <TbBrandDatabricks className="w-20 h-20 m-auto" />
        </div>
        <p className="p-5 pb-6 text-indigo-900 text-xl md700:text-2xl font-bold">
          Welcome to Community Dashboard !!
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="w-full flex flex-col gap-4">
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              className="w-full"
              type="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo((u) => ({ ...u, email: e.target.value }))
              }
              required
            />

            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, password: e.target.value }))
                }
                required
              />
            </FormControl>
          </div>

          <button
            onClick={() => clickSubmit(userInfo)}
            className="w-full md700:w-1/2 inline-block p-1.5 mt-6 md700:text-lg font-semibold text-indigo-50 bg-indigo-500 rounded-full hover:bg-indigo-600 active:bg-primary"
          >
            Login
          </button>

          <div className="flex justify-center m-4 gap-2">
            <span className="text-mediumGray font-semibold">
              Don't have an account?{" "}
            </span>
            <Link to="/" className="font-bold hover:underline text-indigo-700">
              Sign Up!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
