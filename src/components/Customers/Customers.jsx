import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CustomersContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers data from an API
    axios.get('/api/customers')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching customers data:', error);
      });
  }, []);
  return (
    <CustomersContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Customers</h1>
      {customers.length > 0 ? (
        <ul>
          {customers.map(customer => (
            <li key={customer.id}>{customer.name} - {customer.email}</li>
          ))}
        </ul>
      ) : (
        <p>No customers available</p>
      )}
    </CustomersContainer>
  );
};

export default Customers;