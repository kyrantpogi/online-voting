import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Footer from './components/Footer.js';
import VoteLogin from './components/VoteLogin.js';
import AdminLogin from './components/AdminLogin.js';
import VotersDashboard from './components/VotersDashboard.js';
import AdminDashboard from './components/AdminDashboard.js';

import './css/styles.css';
import './css/login.css';
import './css/table.css';

function App() {
  return (
    <BrowserRouter>
      <Layout/>
      <div className="container">
        <Routes>
          <Route index element={ <VoteLogin/> }></Route>
          <Route path="admin" element={ <AdminLogin/> }></Route>
          <Route path="voter-dashboard" element={ <VotersDashboard/> }/>
          <Route path="admin-dashboard" element={ <AdminDashboard/> }/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);