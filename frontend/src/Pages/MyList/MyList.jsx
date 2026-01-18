import React, { useContext, useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { Button } from "@mui/material";
import MyListItems from "./MyListItems";
import AccountSideBar from "../../components/AccountSideBar";
import { MyContext } from "../../MyContext";

const MyList = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>

        <div className="col2 w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 px-3 border-b boredr-[rgba(0,0,0,0.1)]">
              <h2>My List</h2>
              <p className="mt-0">
                There are <span className="font-bold text-[#ff5252]"> {context.wishList?.length}</span>{" "}
                products in your Wishlist
              </p>
            </div>
            {context.wishList?.length !== 0 &&
              context.wishList?.map((item, index) => {
                return (
                  <MyListItems
                    key={index}
                    item={item}
                    removeMyListItem={context.removeFromMyList}
                  />
                );
              })}

              {context.wishList?.length === 0 && (
                  <div className="p-5 text-center">
                      <p>Your wishlist is empty.</p>
                  </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
