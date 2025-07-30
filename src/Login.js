import React from 'react';
import { Login } from 'component-library';
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

  const socialLogins = [
    {
      type: 'facebook',
      icon: facebookLogo,
      onLogin: () => console.log('Facebook login clicked')
    },
    {
      type: 'apple',
      icon: appleLogo,
      onLogin: () => console.log('Apple login clicked')
    },
    {
      type: 'google',
      icon: googleLogo,
      onLogin: () => console.log('Google login clicked')
    }
  ];

  return (
    <Login
      logo={logo}
      brandName="StubHub"
      themeColor="#684cbc"
      onSubmit={handleSubmit}
      onForgotPassword={handleForgotPassword}
      socialLogins={socialLogins}
      showEmailCode={true}
      showCreateAccount={true}
      onCreateAccount={handleCreateAccount}
    />
  );
}

export default LoginPage;
