import PropTypes from "prop-types";
import "./Student.css";

export default function Student(props) {
  const logStatus = props.isLoggedIn ? "loggedIn" : "loggedOut";
  return (
    <div className="box">
      <h1>Name :{props.name}</h1>
      <h2>age: {props.age}</h2>
      <h2>Student:{props.isStudent ? "Yes" : "No"}</h2>
      <h2 className={logStatus}>Status: {logStatus}</h2>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 19,
  isStudent: true,
  isLoggedIn: true,
};

export function Lists() {
  const productLists = [
    { id: "1", name: "Shirts" },
    { id: "2", name: "Pants" },
    { id: "3", name: "Jackets" },
    { id: "4", name: "Shorts" },
  ];

  return (
    <>
      <h1>Rendering Lists</h1>
      <ul>
        {productLists.map((product) => (
          <div key={product.id}>
            <li
              className={`${
                product.id % 2 == 0 ? "bg-color-pink" : "bg-color-sky"
              } margin-8px`}
            >
              {product.name}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
