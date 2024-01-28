import { axiosJWT } from "../middleware/axiosInterceptor";

async function getGoal() {
  const response = await axiosJWT.get("http://localhost:5000/api/goals");
  return response;
}
async function addGoal(text) {
  const response = await axiosJWT.post("http://localhost:5000/api/goals", {
    text: text,
  });
  return response;
}

async function updateGoal(id, updatedGoal) {
  const response = await axiosJWT.put(`http://localhost:5000/api/goals/${id}`, {
    text: updatedGoal,
  });

  return response;
}
async function deleteGoal(id) {
  const response = axiosJWT.delete(`http://localhost:5000/api/goals/${id}`);
  return response;
}

export { getGoal, addGoal, updateGoal, deleteGoal };
