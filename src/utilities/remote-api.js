import { apiConnection } from "./remote_connection";

export const getAllEmployees = async () => {
  let response = await apiConnection.get("/employees/all");
  return response;
};

export const findEmployee = async (id) => {
  let response = await apiConnection.get(`/employees/find/${id}`);
  return response;
}

export const updateEmployee = async (emp) => {
  let response = await apiConnection.post("/employees/update", emp);
  return response;
}
