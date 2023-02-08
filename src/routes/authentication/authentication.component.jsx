import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";
import "./authentication.styles.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const getRedirectResultHandler = async () => {
  const response = await getRedirectResult(auth);
  if (response) {
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef);
  }
};

const SignIn = () => {
  useEffect(() => {
    getRedirectResultHandler();
  }, []);

  return (
    <div class="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
