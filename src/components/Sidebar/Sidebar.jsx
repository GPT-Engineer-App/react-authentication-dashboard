import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUsers, FaChartLine, FaBox } from 'react-icons/fa';

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
      <SidebarItem>
        <FaHome style={{ marginRight: '10px' }} />
        <span>Dashboard</span>
      </SidebarItem>
      <SidebarItem>
        <FaUsers style={{ marginRight: '10px' }} />
        <span>Leads</span>
      </SidebarItem>
      <SidebarItem>
        <FaChartLine style={{ marginRight: '10px' }} />
        <span>Customers</span>
      </SidebarItem>
      <SidebarItem>
        <FaBox style={{ marginRight: '10px' }} />
        <span>Inventory</span>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;