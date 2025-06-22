import { useState } from "react";
import "../Counter/Counter.css";

export default function Form() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    address: "",
    contact: "",
  };
  const [form, setForm] = useState(initialState);
  const [showPreview, setShowPreview] = useState(false);

  const setName = (event) => {
    setForm({ ...form, name: event.target.value });
  };
  const setEmail = (event) => {
    setForm({ ...form, email: event.target.value });
  };
  const setAddress = (event) => {
    setForm({ ...form, address: event.target.value });
  };
  const setPassword = (event) => {
    setForm({ ...form, password: event.target.value });
  };
  const setContact = (event) => {
    setForm({ ...form, contact: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPreview(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input onChange={setName} placeholder="Enter your name" />
        </label>
        <label>
          Email:
          <input onChange={setEmail} placeholder="Email" />
        </label>
        <label>
          Password:
          <input onChange={setPassword} placeholder="Password" />
        </label>
        <label>
          Address:
          <input onChange={setAddress} placeholder="Address" />
        </label>
        <label>
          Contact no.:
          <input onChange={setContact} placeholder="Contact no." />
        </label>

        <button type="submit">Submit</button>
        <button>Reset</button>
      </form>
      {showPreview && (
        <>
          <p>Name: {form.name} </p>
          <p>Email: {form.email} </p>
          <p>Password: {form.password} </p>
          <p>Address:{form.address} </p>
          <p>Phone no.: {form.contact} </p>
        </>
      )}
    </>
  );
}
