import axios from "axios";
const URL = "https://6863d24a88359a373e967374.mockapi.io";
const GIT_URL = "https://api.github.com"


async function getUsers(){
    const response = axios.get(`${URL}/data`);
    return (await response).data;
}

async function updateUserName(userId, name){
  const response = await axios.put(`${URL}data/${userId}`, { name });

  return response.data;
}

async function deleteUser(userId){
  const response = await axios.delete(`${URL}data/${userId}`);

  return response;
}

async function getUserDetails(userName){
  const response = await axios.get(`${GIT_URL}/users/${userName}`);

  return response.data;
}

export const api = {
    getUsers,
    getUserDetails,
    updateUserName,
    deleteUser
} 