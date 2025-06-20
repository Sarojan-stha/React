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
