import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.style.scss";

const DefaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(DefaultFormField);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(DefaultFormField);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("user does not exist");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <div className='buttons-container'>
          <Button buttonType='inverted' type='submit'>
            Submit
          </Button>
          <Button buttonType='google' type='button' onClick={signInWithGoogle}>
            Google Sign IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
