import { Button, Chip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { BiEditAlt } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import { BiExport } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { MyContext } from "../../App";
import { deleteData, fetchDataFromApi } from "../../utils/api";

const SubCategoryList = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(MyContext);

  useEffect(() => {
    fetchSubCategories();
  }, [context.isOpenFullScreenPanel]);

  const fetchSubCategories = async () => {
    setIsLoading(true);
    const res = await fetchDataFromApi("/api/category");
    if (res?.success) {
      // Flatten: We get a tree. We want to list subcategories.
      // So iterate roots, then iterate their children.
      let flattenedSubCats = [];
      if(res.data) {
          res.data.forEach(parent => {
              if(parent.children && parent.children.length > 0) {
                  parent.children.forEach(sub => {
                      flattenedSubCats.push({
                          ...sub,
                          parentName: parent.name,
                          parentImage: parent.images?.[0]
                      });
                  });
              }
          });
      }
      setSubCategories(flattenedSubCats);
    }
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this subcategory?")) {
      const res = await deleteData(`/api/category/${id}`);
      if (res?.success) {
        context.openAlertBox("success", "SubCategory deleted successfully");
        fetchSubCategories();
      } else {
        context.openAlertBox("error", res?.message || "Error deleting subcategory");
      }
    }
  };

  return (
    <>
      <div className="card my-4 shadow-md bg-white sm:rounded-lg">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Sub Category List</h2>
          <div className="col w-[50%] flex items-center gap-3 justify-end">
             <Button
              className="btn !bg-blue-500 !text-white btn-sm !flex !items-center !gap-2"
              onClick={() =>
                context.setIsOpenFullScreenPanel({
                  open: true,
                  model: "Add New Sub Category",
                })
              }
            >
              <IoMdAdd className="text-[20px] font-[500]" />
              Add New Sub Category
            </Button>
          </div>
        </div>

        <div className="relative overflow-x-auto sm:rounded-lg pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs !text-black uppercase bg-gray-50 dark:text-gray-600">
              <tr>
                <th scope="col" className="pl-6 py-3 w-[150px]">
                   Parent Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Parent Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Sub Category Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {subCategories?.length > 0 &&
                subCategories.map((sub, index) => (
                  <tr
                    key={sub._id}
                    className="odd:bg-white odd:dark:bg-gray-100 even:bg-gray-50 border-b dark:border-gray-800 border-gray-700"
                  >
                    <td className="pl-6 py-4">
                      <div className="img w-[50px] h-[50px] rounded-md overflow-hidden border">
                          {sub.parentImage ? (
                               <img src={sub.parentImage} alt={sub.parentName} className="w-full h-full object-cover"/>
                          ) : (
                              <span className="text-xs flex items-center justify-center h-full">No Img</span>
                          )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                       <Chip label={sub.parentName} color="primary" size="small" variant="outlined"/>
                    </td>

                    <td className="px-6 py-4 font-medium text-gray-900">
                        {sub.name}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Tooltip title="Delete SubCategory" placement="top">
                          <Button className="!w-[35px] !h-[35px] !rounded-full !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)]" onClick={() => handleDelete(sub._id)}>
                            <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                          </Button>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {subCategories?.length === 0 && !isLoading && (
              <div className="p-5 text-center text-gray-500">No subcategories found.</div>
          )}
           {isLoading && (
              <div className="p-5 text-center text-gray-500">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default SubCategoryList;
