import PropTypes from "prop-types";

export default function Student(props) {
  return (
    <div>
      <h1>Name :{props.name}</h1>
      <h2>age: {props.age}</h2>
      <h2>Student :{props.isStudent ? "Yes" : "No"}</h2>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 19,
  isStudent: false,
};
