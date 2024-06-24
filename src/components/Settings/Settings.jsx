import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  min-height: 100vh;
`;

const Settings = () => {
  return (
    <SettingsContainer>
      <h1>Settings</h1>
      {/* Add settings functionalities here */}
    </SettingsContainer>
  );
};

export default Settings;