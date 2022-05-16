import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import LoginContainer from './components/LoginContainer.js';
import Footer from './components/Footer.js';

import './css/styles.css';
import './css/login.css';

function App() {
  return (
    <BrowserRouter>
      <Layout/>
      <div className="container">
        <Routes>
          <Route index element={ <LoginContainer/> }></Route>
          <Route path="admin"></Route>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);