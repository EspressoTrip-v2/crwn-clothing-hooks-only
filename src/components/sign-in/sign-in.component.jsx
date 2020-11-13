import React, { useState } from 'react';

/* REACT COMPONENTS */
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

/* FIREBASE */
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

/* STYLED COMPONENT */
import { SignInContainer, ButtonsContainer, SingInTitle } from './sign-in.styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignInContainer>
      <SingInTitle>I already have an account</SingInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          label="password"
          required
        />

        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google{' '}
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
