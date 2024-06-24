import React from 'react';
import styled from 'styled-components';

const LeadsContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const Leads = () => {
  return (
    <LeadsContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Leads</h1>
      {/* Add leads functionalities here */}
    </LeadsContainer>
  );
};

export default Leads;