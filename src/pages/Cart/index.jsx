import { Outlet } from "react-router-dom";

export function Cart() {
  return (
    <div>
      <h1>This is Cart page</h1>
      <Outlet />
    </div>
  );
}
