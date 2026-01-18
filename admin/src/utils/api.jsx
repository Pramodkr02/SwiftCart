import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Fixed: use accessToken instead of token
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      return errorData;
    }
  } catch (error) {
    console.log("Error", error);
  }
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(apiUrl + url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Fixed: use accessToken instead of token
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const uploadUserImage = async (url, updateData) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "multipart/form-data",
    },
  };

  var response;
  await axios.put(apiUrl + url, updateData, params).then((res) => {
    response = res;
  });
  return response;
};

export const editData = async (url, updateData) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
  };

  var response;
  await axios.put(apiUrl + url, updateData, params).then((res) => {
    response = res;
  });
  return response;
};

export const deleteData = async (url) => {
  try {
    const { data } = await axios.delete(apiUrl + url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postDataImage = async (url, formData) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "multipart/form-data",
    },
  };

  try {
      const response = await axios.post(apiUrl + url, formData, params);
      return response.data;
  } catch (error) {
      console.log(error);
      return error.response ? error.response.data : error;
  }
};

