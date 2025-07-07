import { useAuth } from "../../context/auth-context";

export function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  function login() {
    setIsLoggedIn(!isLoggedIn);
    console.log(isLoggedIn);
  }

  return (
    <>
      <h1>This is Log in page</h1>

      {!isLoggedIn && <input type="password" placeholder="password" />}

      <button onClick={login}>{isLoggedIn ? "Log out" : "Log in"}</button>
    </>
  );
}
