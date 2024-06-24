import React from 'react';
import styled from 'styled-components';

const InventoryContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const Inventory = () => {
  return (
    <InventoryContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Inventory</h1>
      {/* Add inventory functionalities here */}
    </InventoryContainer>
  );
};

export default Inventory;