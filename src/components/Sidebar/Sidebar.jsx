import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUsers, FaChartLine, FaBox } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background: #242424;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    color: #FF6600;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <SidebarItem>
          <FaHome style={{ marginRight: '10px' }} />
          <span>Dashboard</span>
        </SidebarItem>
      </Link>
      <Link to="/leads" style={{ textDecoration: 'none' }}>
        <SidebarItem>
          <FaUsers style={{ marginRight: '10px' }} />
          <span>Leads</span>
        </SidebarItem>
      </Link>
      <Link to="/customers" style={{ textDecoration: 'none' }}>
        <SidebarItem>
          <FaChartLine style={{ marginRight: '10px' }} />
          <span>Customers</span>
        </SidebarItem>
      </Link>
      <Link to="/inventory" style={{ textDecoration: 'none' }}>
        <SidebarItem>
          <FaBox style={{ marginRight: '10px' }} />
          <span>Inventory</span>
        </SidebarItem>
      </Link>
    </SidebarContainer>
  );
};

export default Sidebar;