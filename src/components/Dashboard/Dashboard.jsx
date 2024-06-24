import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Dashboard</h1>
      {/* Add dashboard functionalities here */}
    </DashboardContainer>
  );
};

export default Dashboard;