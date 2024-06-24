import React from 'react';
import styled from 'styled-components';

const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #242424;
`;

const ForgotPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #1A1A1A;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #242424;
  color: #FFFFFF;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #FF6600;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #FF9900;
  }
`;

const ForgotPassword = () => {
  return (
    <ForgotPasswordContainer>
      <ForgotPasswordForm>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' }}>Forgot Password</h2>
        <Input type="email" placeholder="Email" required />
        <Button type="submit">Reset Password</Button>
      </ForgotPasswordForm>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;