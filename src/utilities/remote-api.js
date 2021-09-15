import { apiConnection } from "./remote_connection";

export const getAllEmployees = async () => {
  let response = await apiConnection.get("/employees/all");
  return response;
};
