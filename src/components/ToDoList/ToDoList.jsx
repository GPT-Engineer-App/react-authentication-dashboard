import React from 'react';
import styled from 'styled-components';

const ToDoListContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  min-height: 100vh;
`;

const ToDoList = () => {
  return (
    <ToDoListContainer>
      <h1>To-Do List</h1>
      {/* Add to-do list functionalities here */}
    </ToDoListContainer>
  );
};

export default ToDoList;