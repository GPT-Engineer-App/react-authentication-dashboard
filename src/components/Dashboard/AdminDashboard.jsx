import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const AdminDashboard = () => {
  return (
    <DashboardContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Admin Dashboard</h1>
      {/* Add components and data visualizations here */}
    </DashboardContainer>
  );
};

export default AdminDashboard;