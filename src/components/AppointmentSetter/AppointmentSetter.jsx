import React from 'react';
import styled from 'styled-components';

const AppointmentSetterContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const AppointmentSetter = () => {
  return (
    <AppointmentSetterContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Appointment Setter</h1>
      {/* Add appointment setter functionalities here */}
    </AppointmentSetterContainer>
  );
};

export default AppointmentSetter;