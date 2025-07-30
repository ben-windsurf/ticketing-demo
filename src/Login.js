import React from 'react';
import { Login } from '@ben-windsurf/component-library';
import logo from './assets/logos/logo.png';
import facebookLogo from './assets/logos/facebook.png';
import appleLogo from './assets/logos/apple.png';
import googleLogo from './assets/logos/google.png';

function LoginPage() {
  const handleSubmit = ({ email, password, stayLoggedIn }) => {
    console.log('Sign in attempted with:', { email, password, stayLoggedIn });
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  const handleCreateAccount = () => {
    console.log('Create account clicked');
  };

  const handleEmailCode = () => {
    console.log('Email code clicked');
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);
  };

  return (
    <Login
      logo={logo}
      brandName="StubHub"
      themeColor="#684cbc"
      showEmailCode={true}
      socialLogins={{
        facebook: true,
        apple: true,
        google: true
      }}
      facebookLogo={facebookLogo}
      appleLogo={appleLogo}
      googleLogo={googleLogo}
      onSubmit={handleSubmit}
      onForgotPassword={handleForgotPassword}
      onCreateAccount={handleCreateAccount}
      onEmailCode={handleEmailCode}
      onSocialLogin={handleSocialLogin}
    />
  );
}

export default LoginPage;
