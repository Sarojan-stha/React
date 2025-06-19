export default function Student(props) {
  return (
    <>
      <h1>Name :{props.name}</h1>
      <h2>age: {props.age}</h2>
      <h2>Student :{props.isStudent ? "Yes" : "No"}</h2>
    </>
  );
}
