import axios from "axios";
const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8880/api/vista/"
    : "https://www.vistabiomed.com/api/vista/";

const getVistaProducts = () => {
  return axios
    .get(BASE_URL + "product/read.php")
    .then((response) => response.data.products)
    .catch((err) => err);
};

export const productService = {
  getVistaProducts,
};
