import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LeadsContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const Leads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Fetch leads data from an API
    axios.get('/api/leads')
      .then(response => {
        setLeads(response.data);
      })
      .catch(error => {
        console.error('Error fetching leads data:', error);
      });
  }, []);

  return (
    <LeadsContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Leads</h1>
      {leads.length > 0 ? (
        <ul>
          {leads.map(lead => (
            <li key={lead.id}>{lead.name} - {lead.status}</li>
          ))}
        </ul>
      ) : (
        <p>No leads available</p>
      )}
    </LeadsContainer>
  );
};

export default Leads;