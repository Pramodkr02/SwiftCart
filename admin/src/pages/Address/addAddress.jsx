import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import { MyContext } from "../../App";
import { postData } from "../../utils/api";

const AddAddress = () => {
  const context = useContext(MyContext);
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = React.useState("");

  const [formFields, setFormFields] = useState({
    address_line: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    mobile: "",
    status: "",
    userId: context?.userData?._id,
  });

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
    setFormFields({
      status: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFields.address_line === "") {
      context.openAlertBox("error", "Please enter full Address");
      return false;
    }
    if (formFields.city === "") {
      context.openAlertBox("error", "Please enter city");
      return false;
    }
    if (formFields.mobile === "") {
      context.openAlertBox("error", "Please enter mobile number");
      return false;
    }
    if (formFields.state === "") {
      context.openAlertBox("error", "Please enter your state");
      return false;
    }
    if (formFields.pincode === "") {
      context.openAlertBox("error", "Please enter Pincode number");
      return false;
    }
    if (formFields.country === "") {
      context.openAlertBox("error", "Please enter country name");
      return false;
    }

    postData(`/api/address/add`, formFields, { withCredentials: true }).then(
      (res) => {
        console.log(res);
        if (res?.error !== true) {
          setIsLoading(false);
          context.openAlertBox("success", res?.message);

          context?.setIsOpenFullScreenPanel({
            open: false,
          });
        } else {
          context.openAlertBox("error", res?.message);
          setIsLoading(false);
        }
      }
    );
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  return (
    <section className="p-5 bg-gray-50">
      <form onSubmit={handleSubmit} className="form p-8 py-3 ">
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-2 mb-3 gap-4">
            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-3">Address Line 1</h3>
              <input
                onChange={onChangeInput}
                name="address_line"
                value={formFields.address_line}
                type="text"
                className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-3">City</h3>
              <input
                onChange={onChangeInput}
                name="city"
                value={formFields.city}
                type="text"
                className="h-[35px] w-full border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 mb-3 gap-4">
            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-3">State</h3>
              <input
                onChange={onChangeInput}
                name="state"
                value={formFields.state}
                type="text"
                className="w-full h-[35px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-3">Pincode</h3>
              <input
                onChange={onChangeInput}
                name="pincode"
                value={formFields.pincode}
                type="text"
                className="h-[35px] w-full border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>

            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-3">country</h3>
              <input
                onChange={onChangeInput}
                name="country"
                value={formFields.country}
                type="text"
                className="h-[35px] w-full border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>

            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-3">mobile</h3>
              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={(phone) => {
                  setPhone(phone);
                  {
                    setFormFields({
                      mobile: phone,
                    });
                  }
                }}
                disabled={isLoading === true ? true : false}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 mb-3 gap-4">
          <div className="col w-[100%]">
            <h3 className="text-[14px] font-[500] mb-3">Status</h3>
            <Select
              value={status}
              onChange={handleChangeStatus}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              className="w-full"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
          </div>
        </div>

        <Button type="submit" className="btn-blue btn-lg flex gap-2">
          <FaCloudUploadAlt className="text-[25px] text-white" />
          <span>Publish and View</span>
        </Button>
      </form>
    </section>
  );
};

export default AddAddress;
