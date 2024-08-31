import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import UserProfile from './Components/UserProfile'; // Create this component to display user data
import LandingPage from './Profile/LandingPage';
import { FindJob } from './Profile/FindJob';
import Login from './Login/Login';
import CreateAccount from './Login/CreateAccount';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/FindJob' element={<FindJob/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path='/CreateAccount' element={<CreateAccount/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UserProfile" element={<UserProfile />} />

      </Routes>
    </Router>
  );
};

export default App;
