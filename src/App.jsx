import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import ManagerDashboard from './components/Dashboard/ManagerDashboard';
import SalesmanDashboard from './components/Dashboard/SalesmanDashboard';
import LeadManagement from './components/LeadManagement/LeadManagement';
import AppointmentSetter from './components/AppointmentSetter/AppointmentSetter';
import ToDoList from './components/ToDoList/ToDoList';
import UserProfile from './components/UserProfile/UserProfile';
import Settings from './components/Settings/Settings';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import GlobalStyle from './styles/global';
import Dashboard from './components/Dashboard/Dashboard';
import Leads from './components/Leads/Leads';
import Customers from './components/Customers/Customers';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      <div style={{ marginLeft: '250px' }}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
          <Route path="/salesman-dashboard" element={<SalesmanDashboard />} />
          <Route path="/lead-management" element={<LeadManagement />} />
          <Route path="/appointment-setter" element={<AppointmentSetter />} />
          <Route path="/to-do-list" element={<ToDoList />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;