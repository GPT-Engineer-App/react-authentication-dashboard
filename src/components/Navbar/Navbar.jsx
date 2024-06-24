import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #242424;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1 style={{ color: '#FFFFFF' }}>App Name</h1>
      <div>
        <a href="/dashboard" style={{ color: '#FFFFFF', marginRight: '20px' }}>Dashboard</a>
        <a href="/profile" style={{ color: '#FFFFFF', marginRight: '20px' }}>Profile</a>
        <a href="/settings" style={{ color: '#FFFFFF' }}>Settings</a>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;