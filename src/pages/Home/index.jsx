import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function gotoCart() {
    navigate("/cart");
  }
  return (
    <>
      <h1>This is Home page</h1>
      <button onClick={gotoCart}>Goto Cart</button>
    </>
  );
}
