import axios from "axios";
import { Employee } from "./Employee";

const baseURL = "http://localhost/pdo";

export const api = axios.create({
  baseURL,
});

export const fetchEmployees = async () => {
  const response = await api.get("/employees.php");
  return response.data;
};
export const fetchClients = async () => {
  const response = await api.get("/clients.php");
  return response.data;
};
export const fetchReservations = async () => {
  const response = await api.get("/reservations.php");
  return response.data;
};
export const signUp = async () => {
  const response = await api.post("/signup.php");
  return response.data;
};
export const fetchFilteredEmployees = async (
  position: string
): Promise<Employee[]> => {
  const response = await api.get("/employees.php", {
    params: {
      position: position,
    },
  });
  return response.data as Employee[];
  [];
};
export const fetchUserData = async (accessToken: string) => {
  const response = await api.get("/user-info.php", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
