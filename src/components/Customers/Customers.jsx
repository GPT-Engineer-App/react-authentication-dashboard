import React from 'react';
import styled from 'styled-components';

const CustomersContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const Customers = () => {
  return (
    <CustomersContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Customers</h1>
      {/* Add customers functionalities here */}
    </CustomersContainer>
  );
};

export default Customers;