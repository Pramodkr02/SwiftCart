import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "../Navigation/Navigation";
import { MyContext } from "../../MyContext";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ImFire } from "react-icons/im";
import { fetchDataFromApi, postData } from "../../utils/api";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const context = useContext(MyContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setAnchorEl(null);

    fetchDataFromApi(
      `/api/user/logout?token=${localStorage.getItem("accessToken")}`,
      { withCredentials: true },
    ).then((res) => {
      console.log(res);
      context.setIsLogin(false);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    });
  };
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1.5px] ">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%] hidden lg:block">
              <p className="text-[14px] font-[500]">
                Get up to 50% off new season styles, limited time only.
              </p>
            </div>
            <div className="col2 flex items-center justify-between w-full lg:w-[50%] lg:justify-end">
              <ul className="flex items-center gap-3  w-full justify-between lg:w-[200px]">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[11px] lg:text-[13px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[11px] lg:text-[13px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header py-3 border-b-[1px] border-gray-250">
        <div className="container flex items-center justify-between">
          <div className="col1 w-full lg:w-[25%]">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="col2 w-full fixed top-0 left-0 h-full bg-white lg:w-[45%] lg:static p-2 lg:p-0 z-50 hidden lg:block">
            <Search />
          </div>

          <div className="col3 w-[30%] flex items-center pl-8">
            <ul className="flex items-center justify-end gap-3 w-full">
              {context?.windowWidth > 992 && (
                <>
                  {context.isLogin === false ? (
                    <li className="list-none">
                      <Link
                        to="/login"
                        className="link transition text-[15px] font-[500]"
                      >
                        Login
                      </Link>{" "}
                      |{" "}
                      <Link
                        to="/register"
                        className="link transition font-[500]"
                      >
                        Register
                      </Link>
                    </li>
                  ) : (
                    <>
                      <div
                        onClick={handleClick}
                        className="myAccountWrap flex items-center gap-3 cursor-pointer"
                      >
                        <div className="info">
                          <h4 className="text-[14px] font-bold">
                            {context?.userData?.name}
                          </h4>
                        </div>
                        <Button className="!w-[40px] !h-[40px] !min-w-[40px] !min-h-[40px] !rounded-full !bg-[#f1f1f1]">
                          <FaRegUser className="text-[18px] text-[#00000087]" />
                        </Button>
                      </div>

                      <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                          paper: {
                            elevation: 0,
                            sx: {
                              overflow: "visible",
                              filter:
                                "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
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
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <Link to="/my-account">
                          <MenuItem
                            className="flex gap-2"
                            onClick={handleClose}
                          >
                            <FaRegUser className="text-[19px]" />{" "}
                            <span className="text-[14px]">My Account</span>
                          </MenuItem>
                        </Link>
                        <Link to="/my-orders">
                          <MenuItem
                            className="flex gap-2"
                            onClick={handleClose}
                          >
                            <IoBagCheckOutline className="text-[19px]" />
                            <span className="text-[14px]">Order</span>
                          </MenuItem>
                        </Link>

                        <Link to="/my-list">
                          <MenuItem
                            className="flex gap-2"
                            onClick={handleClose}
                          >
                            <IoMdHeartEmpty className="text-[19px]" />
                            <span className="text-[14px]"> My List</span>
                          </MenuItem>
                        </Link>
                        <MenuItem className="flex gap-2" onClick={logout}>
                          <IoMdLogOut className="text-[19px]" />
                          <span className="text-[14px]">Logout</span>
                        </MenuItem>
                      </Menu>
                    </>
                  )}
                  <li>
                    <Tooltip title="Trending" placement="bottom">
                      <IconButton aria-label="cart">
                        <ImFire className="" />
                      </IconButton>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip title="WishList" placement="bottom">
                      <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                          <FaRegHeart />
                        </StyledBadge>
                      </IconButton>
                    </Tooltip>
                  </li>
                </>
              )}

              <li>
                <Tooltip title="Cart" placement="bottom">
                  <IconButton
                    aria-label="cart"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
