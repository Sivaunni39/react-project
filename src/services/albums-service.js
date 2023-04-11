import axiosInstance from "../utility/axios";

export const getAlbums = () =>
  axiosInstance.get("/albums").then((res) => res.data);

export const getAlbumsDetails = (id) =>
  axiosInstance.get("/albums/" + id).then((res) => res.data);
