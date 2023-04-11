import axiosInstance from "../utility/axios";

export const getTodos = () =>
  axiosInstance.get("/todos").then((res) => res.data);

export const getTodoDetails = (id) =>
  axiosInstance.get("/todos/" + id).then((res) => res.data);
