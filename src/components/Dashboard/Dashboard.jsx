import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    axios.get('/api/dashboard')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []);

  return (
    <DashboardContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Dashboard</h1>
      {data ? (
        <div>
          <p>Total Sales: {data.totalSales}</p>
          <p>New Customers: {data.newCustomers}</p>
          <p>Pending Orders: {data.pendingOrders}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;