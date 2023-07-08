import React, { useState } from "react";
import useHandleChange from "../../hook/useHandleChange";

const Form = () => {
  // const [fullname, setFullName] = useState("");
  // const [messenger, setMessenger] = useState("");
  // const [country, setCountry] = useState("");

  // const handleInputChange = (e) => {
  //   setFullName(e.target.value);
  // };
  // const handleTextAreaChange = (e) => {
  //   setMessenger(e.target.value);
  // };
  // const handleSelectChange = (e) => {
  //   setCountry(e.target.value);
  // };

  // const [values, setValues] = useState({
  //   fullname: "",
  //   email: "",
  //   hobby: "false",
  // });
  // console.log("🚀 ~ file: Form.jsx:22 ~ Form ~ values:", values);

  // const handleInputChange = (e) => {
  //   const type = e.target.type;
  //   setValues({
  //     ...values,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   });
  // };

  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: "false",
  });

  const [nameErr, setNameErr] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setNameErr("Your fullname is empty!");
    } else {
      setNameErr("");
    }
  };

  // console.log("Form ~ values:", values);
  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-5 border border-gray-400 rounded-lg"
            placeholder="Enter your name..."
            onChange={handleChange}
          />
          {nameErr}
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-400 rounded-lg"
          placeholder="Enter your email..."
          onChange={handleChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={handleChange} /> */}
        <button
          type="submit"
          className=" p-3 rounded-lg text-white bg-purple-500"
        >
          Submit
        </button>
      </form>
      {/* <br />
      {messenger}
      <textarea
        className="w-full max-w-[300px] p-5 border border-gray-400 rounded-lg"
        placeholder="Enter your messenger..."
        name="messenger"
        onChange={handleTextAreaChange}
      ></textarea>
      <br />
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
      </select> */}
    </div>
  );
};

export default Form;
