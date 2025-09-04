import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { FaCloudUploadAlt } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";
import { uploadUserImage } from "../../utils/api";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { editData } from "../../utils/api";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Profile = () => {
  const context = useContext(MyContext);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    mobile: "",
  });

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

      const ph = `"${context?.userData?.mobile}`;
      setPhone(ph);
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

  const formdata = new FormData();

  let img_arr = [];
  let uniqueArray = [];
  let selectedImage = [];

  useEffect(() => {
    const userAvatar = [];
    userAvatar.push(context?.userData?.avatar);
    setPreviews(userAvatar);
  }, [context?.userData]);

  const onChangeFile = (e, url) => {
    try {
      setPreviews([]);
      const files = e.target.files;
      setUploading(true);
      for (var i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/jpg")
        ) {
          const file = files[i];
          selectedImage.push(file);
          formdata.append("avatar", file);

          uploadUserImage("/api/user/user-avatar", formdata).then((res) => {
            setUploading(false);
            let avatar = [];
            console.log(res?.data?.avatar);
            avatar.push(res?.data?.avatar);
            setPreviews(avatar);
          });
        } else {
          context.openAlertBox("error", "Invalid file type");
          setUploading(false);
          return false;
        }
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="card w-[65%] my-4 pt-5 shadow-md sm:rounded-1g bg-white px-5 pb-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-[18px]">User Profile</h2>
          <Button variant="contained" color="primary">
            Change Password
          </Button>
        </div>

        <br />
        <div className="w-[100px] h-[100px]  rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-300">
          {uploading === true ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              {previews?.length !== 0 ? (
                previews?.map((img, index) => {
                  return (
                    <img
                      key={index}
                      src={img}
                      alt={`preview-${index}`}
                      className="w-full h-full object-cover"
                    />
                  );
                })
              ) : (
                <img src={"/OIP.jpeg"} className="w-full h-full object-cover" />
              )}
            </>
          )}
          <div className="overlay absolute w-[100%] h-[100%] top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center  opacity-0 transition-all group-hover:opacity-100">
            <FaCloudUploadAlt className="text-[#fff] text-[26px]" />
            <input
              type="file"
              accept="image/*"
              className="absolute w-[100%] h-[100%] top-0 left-0 opacity-0 cursor-pointer"
              onChange={(e) => onChangeFile(e, "/api/user/user-avatar")}
              name="avatar"
            />
          </div>
        </div>

        <br />

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
              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={(phone) => {
                  setPhone(phone);
                  setFormFields({
                    mobile: phone,
                  });
                }}
                disabled={isLoading === true ? true : false}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
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

            <div
              onClick={() =>
                context.setIsOpenFullScreenPanel({
                  open: true,
                  model: "Add New Address",
                })
              }
              type=""
              disabled={!validValue}
              className="btn-org btn-lg uppercase text-[600]  !w-auto !h-auto !px-4 !py-2 cursor-pointer"
            >
              Add Address
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
