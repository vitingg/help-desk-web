import { api } from "../../../shared/lib/api";

export function signIn(data: {email: string, password: string}) {
  return api.post("/auth/sign-in", data);
}

