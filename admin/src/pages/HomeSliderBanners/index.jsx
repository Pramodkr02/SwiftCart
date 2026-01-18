import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import { IoMdAdd } from "react-icons/io";
import { MyContext } from "../../App";
import { deleteData, fetchDataFromApi, editData } from "../../utils/api";
import Switch from '@mui/material/Switch'; // For status toggle

const HomeSliderBanners = () => {
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(MyContext);

  useEffect(() => {
    fetchSlides();
  }, [context.isOpenFullScreenPanel]); 

  const fetchSlides = async () => {
    setIsLoading(true);
    const res = await fetchDataFromApi("/api/homeSlider");
    if (res?.success) {
      setSlides(res.data);
    }
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this slide?")) {
        const res = await deleteData(`/api/homeSlider/${id}`);
        if (res?.success) {
            context.openAlertBox("success", "Slide deleted successfully");
            fetchSlides(); 
        } else {
            context.openAlertBox("error", res?.message || "Error deleting slide");
        }
    }
  };

  const handleStatusChange = async (e, id) => {
      const isActive = e.target.checked;
      const res = await editData(`/api/homeSlider/${id}`, { isActive });
      if (res?.data?.success || res?.status === 200) { // Check response structure from editData helper/axios
          context.openAlertBox("success", "Status updated");
          fetchSlides();
      } else {
          context.openAlertBox("error", "Error updating status");
      }
  };

  return (
    <>
      <div className="card my-4 shadow-md bg-white sm:rounded-lg">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Home Slider Banners </h2>
          <div className="col w-[50%] flex items-center gap-3 justify-end">
            <Button
              className="btn !bg-blue-500 !text-white btn-sm !flex !items-center !gap-2"
              onClick={() =>
                context.setIsOpenFullScreenPanel({
                  open: true,
                  model: "Add Home Silde", 
                })
              }
            >
              <IoMdAdd className="text-[20px] font-[500]" />
              Add Home Slide
            </Button>
          </div>
        </div>

        <div className="relative overflow-x-auto sm:rounded-lg pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
              <tr>
                <th scope="col" className="px-6 py-3 w-[400px]">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {slides?.length > 0 &&
                slides.map((slide, index) => (
                  <tr
                    key={slide._id}
                    className="odd:bg-white odd:dark:bg-gray-100  even:bg-gray-50 border-b dark:border-gray-800 border-gray-700"
                  >
                    <td className="px-6 py-4 w-[300px]">
                      <div className="flex items-center gap-4 w-[300px]">
                        <div 
                            className="img w-[300px] h-[150px] rounded-md overflow-hidden group border border-gray-200 cursor-pointer"
                            onClick={() => window.open(slide.image, '_blank')}
                            title="Click to view full image"
                        >
                            <img
                              src={slide.image}
                              alt="Slide"
                              className="w-full h-full object-cover group-hover:scale-105 transition-all"
                            />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center">
                            <Switch 
                                checked={slide.isActive} 
                                onChange={(e) => handleStatusChange(e, slide._id)}
                                inputProps={{ 'aria-label': 'controlled' }} 
                            />
                            <span className={`ml-2 text-xs font-medium ${slide.isActive ? 'text-green-600' : 'text-red-600'}`}>
                                {slide.isActive ? "Active" : "Inactive"}
                            </span>
                        </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Tooltip title="Remove Slide" placement="top">
                          <Button className="!w-[35px] !h-[35px] !rounded-full !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)]" onClick={() => handleDelete(slide._id)}>
                            <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                          </Button>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {slides?.length === 0 && !isLoading && (
              <div className="p-5 text-center text-gray-500">No slides found.</div>
          )}
           {isLoading && (
              <div className="p-5 text-center text-gray-500">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeSliderBanners;
