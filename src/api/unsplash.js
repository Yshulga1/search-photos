import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 80c6b69e481e0ad4a9cab89b4f422a80d77cfc10dd92e0b194ad061e73a08b55"
  }
});
