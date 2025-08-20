import { Button } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import AccountSideBar from "../../components/AccountSideBar";

const MyAccount = () => {
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

            <form action="" className="mt-5">
              <div className="flex items-center gap-3">
                <div className="w-[50%]">
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>

                <div className="w-[50%]">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
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
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button className="btn-org btn-lg  w-[100px]">Save</Button>
                <Button className="btn-org btn-lg  btn-border  w-[100px]">
                  Save
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
