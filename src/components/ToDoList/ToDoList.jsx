import React from 'react';
import styled from 'styled-components';

const ToDoListContainer = styled.div`
  padding: 20px;
  background: #242424;
  min-height: 100vh;
  color: #FFFFFF;
`;

const ToDoList = () => {
  return (
    <ToDoListContainer>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>To-Do List</h1>
      {/* Add to-do list functionalities here */}
    </ToDoListContainer>
  );
};

export default ToDoList;