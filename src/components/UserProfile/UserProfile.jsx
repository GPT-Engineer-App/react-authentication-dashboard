import React from 'react';
import styled from 'styled-components';

const UserProfileContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>User Profile</h1>
      {/* Add user profile functionalities here */}
    </UserProfileContainer>
  );
};

export default UserProfile;