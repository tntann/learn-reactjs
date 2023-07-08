import React from "react";
import useHandleChange from "../../hook/useHandleChange";

const Form2 = () => {
  //   const [values, setValues] = useState({
  //     fullname: "",
  //     email: "",
  //     hobby: "false",
  //   });

  //   const handleInputChange = (e) => {
  //     const type = e.target.type;
  //     setValues({
  //       ...values,
  //       [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //     });
  //   };

  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: "false",
  });
  console.log("🚀 ~ file: Form.jsx:37 ~ Form ~ values:", values);
  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 border border-gray-400 rounded-lg"
          placeholder="Enter your name..."
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-400 rounded-lg"
          placeholder="Enter your email..."
          onChange={handleChange}
        />
        <input type="checkbox" name="hobby" onChange={handleChange} />
      </div>
    </div>
  );
};

export default Form2;
