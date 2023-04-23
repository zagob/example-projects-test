import { useContext } from "react";
import { AutContext } from "../contexts/AuthProvider";

export function useAuth() {
  const auth = useContext(AutContext);

  return auth;
}
