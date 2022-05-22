import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Footer from './components/Footer.js';
import VoteLogin from './components/VoteLogin.js';
import AdminLogin from './components/AdminLogin.js';

import './css/styles.css';
import './css/login.css';

function App() {
  return (
    <BrowserRouter>
      <Layout/>
      <div className="container">
        <Routes>
          <Route index element={ <VoteLogin/> }></Route>
          <Route path="admin" element={ <AdminLogin/> }></Route>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);