import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const Settings = () => {
  return (
    <SettingsContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Settings</h1>
      {/* Add settings functionalities here */}
    </SettingsContainer>
  );
};

export default Settings;