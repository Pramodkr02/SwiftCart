import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../MyContext";
import CircularProgress from "@mui/material/CircularProgress";
import { uploadUserImage } from "../../utils/api";

const AccountSideBar = () => {
  const context = useContext(MyContext);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);

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
    <div className="card bg-white shadow-md rounded-md sticky top-[20px] ">
      <div className="w-full p-5 flex items-center justify-center flex-col">
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
        <h3>{context?.userData?.name}</h3>
        <h6 className="text-[14px] font-[500]">{context?.userData?.email}</h6>
      </div>

      <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
        <li className="w-full">
          <NavLink to="/my-account" exact={true} activeClassName="isActive">
            <Button className="flex !text-left !justify-start !px-5 !py-2 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none items-center !gap-2 w-full">
              <FaRegUser className="text-[18px] " />
              My Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-list" exact={true} activeClassName="isActive">
            <Button className="flex !text-left !justify-start !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none items-center !gap-2 !w-full">
              <FaRegHeart className="text-[18px] " />
              My List
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-orders" exact={true} activeClassName="isActive">
            <Button className="flex !text-left !justify-start !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none items-center !gap-2 !w-full">
              <IoBagCheckOutline className="text-[18px] " />
              My Orders
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/logout" exact={true} activeClassName="isActive">
            <Button className="flex !text-left !justify-start !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none items-center !gap-2 !w-full">
              <IoMdLogOut className="text-[18px] " />
              Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AccountSideBar;
