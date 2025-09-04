import { Button, CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AccountSideBar from "../../components/AccountSideBar";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { editData } from "../../utils/api";

const MyAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    mobile: "",
  });

  const context = useContext(MyContext);
  const history = useNavigate();
  const validValue = Object.values(formFields).every((el) => el);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token === null) {
      history("/");
    }
  }, [context?.isLogin]);

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      setUserId(context?.userData?._id);
      setFormFields({
        name: context?.userData?.name || "",
        email: context?.userData?.email || "",
        mobile: context?.userData?.mobile || "",
      });
    }
  }, [context?.userData]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter full name");
      return false;
    }
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email id");
      return false;
    }
    if (formFields.mobile === "") {
      context.openAlertBox("error", "Please enter mobile number");
      return false;
    }

    editData(`/api/user/${userId}`, formFields, { withCredentials: true }).then(
      (res) => {
        console.log(res);
        if (res?.error !== true) {
          setIsLoading(false);
          context.openAlertBox("success", res?.message);
          setFormFields({
            email: "",
            password: "",
            mobile: "",
          });

          localStorage.setItem("accessToken", res?.data.accessToken);
          localStorage.setItem("refreshToken", res?.data.refreshToken);
          context.setIsLogin(true);
          history("/");
        } else {
          context.openAlertBox("error", res?.message);
          setIsLoading(false);
        }
      }
    );
  };

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 rounded-md">
            <h2 className="pb-3">My Profile</h2>
            <hr />

            <form action="" className="mt-5" onSubmit={handleSubmit}>
              <div className="flex items-center gap-3">
                <div className="w-[50%]">
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="name"
                    value={formFields.name}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>

                <div className="w-[50%]">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="email"
                    value={formFields.email}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 mt-5 mb-5">
                <div className="w-[50%]">
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="mobile"
                    value={formFields.mobile}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  disabled={!validValue}
                  className="btn-org btn-lg  !w-auto !h-auto !px-4 !py-2"
                >
                  {isLoading === true ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    "Update Profile"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
