import { Outlet } from "react-router-dom";
export function About() {
  return (
    <div>
      <h1>This is About page</h1>
      <Outlet />
    </div>
  );
}
