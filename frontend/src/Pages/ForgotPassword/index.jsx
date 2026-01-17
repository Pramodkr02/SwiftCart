import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../MyContext";
import ForgotPswrd from "../../../public/ForgotPswrd.png";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utils/api";

const ForgotPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

  const context = useContext(MyContext);
  const history = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const validValue = Object.values(formFields).every((el) => el);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.newPassword === "") {
      context.openAlertBox("error", "Please enter new password");
      setIsLoading(false);
      return false;
    }
    if (formFields.confirmPassword === "") {
      context.openAlertBox("error", "Please enter confirm password");
      setIsLoading(false);
      return false;
    }

    if (formFields.newPassword !== formFields.confirmPassword) {
      context.openAlertBox("error", "Passwords and confirm Password not match");
      setIsLoading(false);
      return false;
    }

    postData("/api/user/reset-password", formFields).then((res) => {
      console.log(res);
      localStorage.removeItem("userEmail");
      localStorage.removeItem("actionType");
      context.openAlertBox("success", res?.message);
      setIsLoading(false);
      history("/login");
    });
  };

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

          <form action="" className="w-full mt-5" onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword === false ? "password" : "text"}
                id="password"
                label="New Password *"
                variant="outlined"
                className="w-full"
                name="newPassword"
                value={formFields.newPassword}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
              />
              <Button
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
                name="confirmPassword"
                value={formFields.confirmPassword}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
              />
              <Button
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

            <div className="flex items-center w-full mt-3">
              <Button
                type="submit"
                disabled={!validValue}
                className="btn-org btn-lg w-full flex gap-3"
              >
                {isLoading === true ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Change Password"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
