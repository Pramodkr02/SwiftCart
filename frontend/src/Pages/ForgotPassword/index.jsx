import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import ForgotPswrd from "../../../public/ForgotPswrd.png";

const ForgotPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowPassword2, setIsShowPassword2] = useState(true);

  const context = useContext(MyContext);
  const history = useNavigate();

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto bg-white p-4">
          <div className="text-center flex items-center justify-center">
            <img src={ForgotPswrd} alt="" width="80" />
          </div>
          <h3 className="text-center text-[18px] text-black mt-4">
            Forgot Password
          </h3>

          <form action="" className="w-full mt-5">
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword === false ? "password" : "text"}
                id="password"
                label="New Password *"
                variant="outlined"
                className="w-full"
                name="name"
              />
              <Button
                type="submit"
                onClick={() => setIsShowPassword(!isShowPassword)}
                className="!absolute top-[10px]    right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black "
              >
                {isShowPassword === true ? (
                  <FaEye className="!text-[20px] opacity-75" />
                ) : (
                  <FaEyeSlash className="!text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword2 === false ? "password" : "text"}
                id="confirm_password"
                label="Confirm Password *"
                variant="outlined"
                className="w-full"
                name="password"
              />
              <Button
                type="submit"
                onClick={() => setIsShowPassword2(!isShowPassword2)}
                className="!absolute top-[10px]    right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black "
              >
                {isShowPassword2 === true ? (
                  <FaEye className="!text-[20px] opacity-75" />
                ) : (
                  <FaEyeSlash className="!text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <Button className=" w-full btn-org  btn-lg ">
              Change Password
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
