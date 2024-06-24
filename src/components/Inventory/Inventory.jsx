import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const InventoryContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Fetch inventory data from an API
    axios.get('/api/inventory')
      .then(response => {
        setInventory(response.data);
      })
      .catch(error => {
        console.error('Error fetching inventory data:', error);
      });
  }, []);

  return (
    <InventoryContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Inventory</h1>
      {inventory.length > 0 ? (
        <ul>
          {inventory.map(item => (
            <li key={item.id}>{item.name} - {item.quantity}</li>
          ))}
        </ul>
      ) : (
        <p>No inventory available</p>
      )}
    </InventoryContainer>
  );
};

export default Inventory;