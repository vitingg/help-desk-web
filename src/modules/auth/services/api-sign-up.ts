import { api } from "../../../shared/lib/api";

export function signUp(data: {
  username: string;
  email: string;
  password: string;
}) {
  return api.post("/auth/sign-up", data);
}
