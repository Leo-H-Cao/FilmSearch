import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDIwZjQyZGI0MzZiZmUyNmU5Y2VkNmZmOWIzNGFhMyIsInN1YiI6IjVmZjIxZGVmNTVjOTI2MDAzZTNmOWY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mUkO7jbneUo2GpxI4x23ypidHsIv-4paVslcdiCxKAk",
  },
});
