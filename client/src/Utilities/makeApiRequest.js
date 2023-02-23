import axios from "axios";

const makeApiRequest = (url) => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("API REQUEST ERROR:", error);
      throw error;
    });
};

export default makeApiRequest;
