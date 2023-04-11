import axiosInstance from "../utility/axios";

export const getPosts = () =>
  axiosInstance.get("/posts").then((res) => res.data);

export const getPostDetails = (id) =>
  axiosInstance.get("/posts/" + id).then((res) => res.data);
