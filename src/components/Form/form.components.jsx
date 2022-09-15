import Field from "../Fields/fields.components.jsx";
import { useState } from "react";
import { validate } from "../../utils/helper";

const formFields = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: ""
};

const errorFields = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: ""
};

const Form = () => {
  const [fields, setFields] = useState(formFields);
  const [errors, setError] = useState(errorFields);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setError({
      ...errors,
      [name]: validate(name, value)
    });
    setFields({
      ...fields,
      [name]: value
    });
  };

  return (
    <div>
      <Field
        label="Name"
        type="text"
        name="name"
        value={fields.name}
        onChange={handleUserInput}
        error={errors.name}
      />
      <Field
        label="Email"
        type="email"
        name="email"
        value={fields.email}
        onChange={handleUserInput}
        error={errors.email}
      />
      <Field
        label="Phone Number"
        type="text"
        name="phoneNumber"
        value={fields.phoneNumber}
        onChange={handleUserInput}
        error={errors.phoneNumber}
      />
      <Field
        label="Password"
        type="Password"
        name="password"
        value={fields.password}
        onChange={handleUserInput}
        error={errors.password}
      />
      <Field
        label="Confirm Password"
        type="Password"
        name="confirmPassword"
        value={fields.confirmPassword}
        onChange={handleUserInput}
        error={errors.confirmPassword}
      />
      <button>Submit</button>
    </div>
  );
};

export default Form;
