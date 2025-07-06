import { Link } from "react-router-dom";
import { Home } from "./Home";
import { Cart } from "./Cart";
import { About } from "./About";
export function App() {
  return (
    <div className="divClass">
      <Link to="/Home">Home</Link>||
      <Link to="../Cart">Cart</Link>||
      <Link to="../About">About</Link>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}
