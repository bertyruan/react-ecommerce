import { useState } from "react";
import "./sign-in-form.styles.scss";
import FormInput from "./../form-input/form-input.component";
import Button from "../button/button.component";
import {
  authUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const googleSignIn = async () => {
    await signInWithGooglePopup();
  };

  const refreshForm = () => {
    setFormFields(defaultFormFields);
  };

  const onChangeHandler = ({ target: { name, value } }) => {
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await authUserWithEmailAndPassword(email, password);

      refreshForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        case "auth/user-not-found":
          alert("Wrong username");
          break;
        default:
          console.log(
            `An error has occurred while signing in: ${error.message}`
          );
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          onChange={onChangeHandler}
          value={email}
        ></FormInput>
        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          onChange={onChangeHandler}
          value={password}
        ></FormInput>
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={googleSignIn}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
