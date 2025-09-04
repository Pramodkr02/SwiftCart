import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { MdOutlineSearch } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { IoMdNotificationsOutline } from "react-icons/io";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaRegUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { MyContext } from "../../App";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorMyAcc, setAnchorMyAcc] = useState(false);
  const openMyAcc = Boolean(anchorMyAcc);

  const handleClickMyAcc = () => {
    setAnchorMyAcc(true);
  };

  const handleCloseMyAcc = () => {
    setAnchorMyAcc(false);
  };

  const logout = () => {
    setAnchorMyAcc(null);
    fetchDataFromApi(
      `/api/user/logout?token=${localStorage.getItem("accessToken")}`,
      { withCredentials: true }
    ).then((res) => {
      if (res?.error === false) {
        context.setIsLogin(false);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    });
  };

  const context = useContext(MyContext);

  return (
    <header className="w-full  pl-64 pr-7 h-auto py-2 shadow-md bg-[rgb(255,255,255)] flex items-center justify-between">
      <div className="part1">
        <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]">
          <RiMenu2Fill className="text-[19px] text-[rgba(0,0,0,0.8)]" />
        </Button>
      </div>

      <div className="part2 w-[40%] flex  items-center justify-end gap-5 ">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <IoMdNotificationsOutline />
          </StyledBadge>
        </IconButton>

        <div className="relative">
          {context.isLogin === true ? (
            <div
              className="rounded-full w-[30px] h-[30px] overflow-hidden cursor-pointer "
              onClick={() => handleClickMyAcc()}
            >
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.im5y-aBpUoExkNfxAxX8NwHaHa&pid=Api&P=0&h=220"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <Link to="/sign-up">
              <Button className="flex !h-auto !w-auto !px-3 !py-1  !border !rounded-3xl !bg-blue-700 !text-white">
                sign in
              </Button>
            </Link>
          )}
          <Menu
            anchorMyAcc={anchorMyAcc}
            id="my-account"
            open={openMyAcc}
            onClose={handleCloseMyAcc}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleCloseMyAcc} className="!bg-white">
              <div className="flex items-center gap-3">
                <div className="rounded-full w-[30px] h-[30px] overflow-hidden cursor-pointer ">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.im5y-aBpUoExkNfxAxX8NwHaHa&pid=Api&P=0&h=220"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="info">
                  <h3 className="text-[15px] leading-5 font-[500]">
                    {context.isLogin === true
                      ? context?.userData?.name
                      : "User"}
                  </h3>
                </div>
              </div>
            </MenuItem>

            <Divider />

            <Link to="/profile">
              <MenuItem
                onClick={handleCloseMyAcc}
                className="flex items-center gap-3"
              >
                <FaRegUser className="text-[17px]" />
                <span className="text-[14px]">Profile</span>
              </MenuItem>
            </Link>

            <MenuItem
              onClick={handleCloseMyAcc}
              className="flex items-center gap-3"
            >
              <IoMdLogOut onClick={logout} className="text-[18px]" />
              <span className="text-[14px]">Logout</span>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
