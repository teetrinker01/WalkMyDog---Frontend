import axios from "axios";

const API = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
  useCredentials: true
});
export default {
  //Auth
  async signup(newUser) {
    const response = await API.post("/auth/signup", {
      ...newUser
    });
    return response.data;
  },
  async login(user) {
    const response = await API.post("/auth/login", {
      ...user
    });
    return response.data;
  },
  //Dogs
  async createDog(newDog) {
    const response = await API.post("/dogs", {
      ...newDog
    });
    return response.data;
  },
  async getAllDogs() {
    const response = await API.get("/dogs");
    return response.data;
  },
  async getDogById() {
    const response = await API.get("/dogs/:dogid");
    return response.data;
  },
  async updateDogById(updateDog) {
    const response = await API.put("/dogs/:dogid", {
      ...updateDog
    });
    return response.data;
  },
  async deleteDogById() {
    const response = await API.delete("/dogs/:dogid");
    return response.data;
  },
  async createRequest(newRequest) {
    const response = await API.post("/dogs/:dogid/request", {
      ...newRequest
    });
    return response.data;
  },
  //Me
  async getMe() {
    const response = await API.get("/me");
    return response.data;
  },
  async putMe(updateMe) {
    const response = await API.get("/me", {
      ...updateMe
    });
    return response.data;
  },
  async deleteMe() {
    const response = await API.delete("/me");
    return response.data;
  },
  async getMyDog() {
    const response = await API.get("/me/dog");
    return response.data;
  },
  async getAllRequests() {
    const response = await API.get("/me/request");
    return response.data;
  },
  async putRequestById(updateRequest) {
    const response = await API.put("/me/request/:requestId", {
      ...updateRequest
    });
    return response.data;
  },
  async getRequestById() {
    const response = await API.get("/me/request/:requestId");
    return response.data;
  },
  async deleteRequestById() {
    const response = await API.delete("/me/request/:requestId");
    return response.data;
  },
  //User
  async getUserById() {
    const response = await API.get("/users/:id");
    return response.data;
  }
};
