import { useState } from "react";
import "./sign-up-form.styles.scss";
import {
  newUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords are not matching");
      return;
    }
    try {
      const { user } = await newUserWithEmailAndPassword(email, password);
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });

      resetFormFields();
    } catch (e) {
      // add some firebase error message handling
      console.log(`Error signing up with email and password: ${e.message}`);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          onChange={handleChanges}
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          onChange={handleChanges}
          value={email}
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          onChange={handleChanges}
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={handleChanges}
          value={confirmPassword}
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
