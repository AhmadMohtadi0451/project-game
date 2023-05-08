import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9423c3789ae140f1bf5d3d4078e8c1d4",
  },
});
