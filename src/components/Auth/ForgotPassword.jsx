import React from 'react';
import styled from 'styled-components';

const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const ForgotPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #FC2427;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #FCE63B;
  }
`;

const ForgotPassword = () => {
  return (
    <ForgotPasswordContainer>
      <ForgotPasswordForm>
        <h2>Forgot Password</h2>
        <Input type="email" placeholder="Email" required />
        <Button type="submit">Reset Password</Button>
      </ForgotPasswordForm>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;