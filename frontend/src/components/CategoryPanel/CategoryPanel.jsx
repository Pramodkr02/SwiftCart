import React, { useState } from "react";
import "./CategoryPanel.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";
import CategoryCollapse from "../CategoryCollapse/CategoryCollapse";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpencatPanel(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      className="categoryPanel"
    >
      <h3 className="p-3 tex-[17px] font-[500] flex items-center justify-between">
        Shop By categories
        <IoClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>
      <CategoryCollapse />
    </Box>
  );

  return (
    <Drawer open={props.isOpneCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
