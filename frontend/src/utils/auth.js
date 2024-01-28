import axios from "axios";

async function register(userData) {
  console.log(userData);
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user",
      userData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function login(userData) {
  console.log(userData);
  try {
    const data = await axios.post(
      "http://localhost:5000/api/user/login",
      userData
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { register, login };
