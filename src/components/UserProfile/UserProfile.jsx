import React from 'react';
import styled from 'styled-components';

const UserProfileContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  min-height: 100vh;
`;

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <h1>User Profile</h1>
      {/* Add user profile functionalities here */}
    </UserProfileContainer>
  );
};

export default UserProfile;