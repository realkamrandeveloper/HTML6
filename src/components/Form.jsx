import { useState } from "react";
import Personal from "./Personal";
import Address from "./Address";
import Education from "./Education";

const Form = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    alert("Submitted ✅");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Personal handleChange={handleChange} />
      <Address handleChange={handleChange} />
      <Education handleChange={handleChange} />

      <br />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default Form;