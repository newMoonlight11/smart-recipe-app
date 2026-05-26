import { create } from "axios";

export const api = create({
  baseURL: "http://localhost:8000/api/v1/",
});