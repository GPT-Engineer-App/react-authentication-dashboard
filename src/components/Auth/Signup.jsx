import React from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #242424;
`;

const SignupForm = styled.form`
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

const Signup = () => {
  return (
    <SignupContainer>
      <SignupForm>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' }}>Signup</h2>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Signup</Button>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;