import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

const AuthUser = () => {
  const [user, loading] = useAuthState(auth);

  const [loadUser, setLoadUser] = useState(true);
  const [usr, setUsr] = useState(null);

  useEffect(() => {
    setLoadUser(loading);
    setUsr(user);
  }, [user, loading]);

  return { loadUser, usr, db };
};

export default AuthUser;
