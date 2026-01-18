import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";
import AddProducts from "./AddProducts";
import AddHomeSlide from "../HomeSliderBanners/addHomeSlide";
import AddCategory from "../Category/addCategory";
import AddSubCategory from "../Category/addSubCategory";
import AddAddress from "../Address/addAddress";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductCart = () => {
  const context = useContext(MyContext);

  const handleClose = () => {
    context.setIsOpenFullScreenPanel(false);
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={context.isOpenFullScreenPanel?.open === true}
        onClose={() =>
          context.setIsOpenFullScreenPanel({
            open: false,
            model: "" 
          })
        }
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() =>
                context.setIsOpenFullScreenPanel({
                  open: false,
                })
              }
              aria-label="close"
            >
              <IoMdClose className="text-gray-800" />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <span className="text-gray-800">
                {context.isOpenFullScreenPanel?.model}
              </span>
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={() =>
                context.setIsOpenFullScreenPanel({
                  open: false,
                })
              }
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        {context.isOpenFullScreenPanel?.model === "Add Product" && (
          <AddProducts />
        )}

        {context.isOpenFullScreenPanel?.model === "Add Home Silde" && (
          <AddHomeSlide />
        )}

        {context.isOpenFullScreenPanel?.model === "Add New Category" && (
          <AddCategory />
        )}

        {context.isOpenFullScreenPanel?.model === "Add New Sub Category" && (
          <AddSubCategory />
        )}

        {context.isOpenFullScreenPanel?.model === "Add New Address" && (
          <AddAddress />
        )}
      </Dialog>
    </div>
  );
};

export default ProductCart;
