import React from "react";
import Logo from "../Assets/logo.jpg";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import About from "./About";
import Teams from "./Teams";
import Home from "./Home";
import Product from "./Product";
import List from "./List";
import SearchUser from "./SearchUser";
//import Banner from "./Banner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
const Header = (props) => {
   
  return (
    <>
      <Router>
          <div className="w-100 d-flex topBg">
              <div className="p-2">Sitemap</div>
              <div className="p-2">Contact</div>
              <div className="ms-auto p-2">Language</div>
          </div>
      <Navbar bg="ligh" variant="light">
    <Container>
    <Link className="nav-link brand" to="/"><img src={Logo} /></Link>
    <Nav className="me-auto navbar-nav">
      <Link className="nav-link" to={"/home"}>Home</Link>
      <Link className="nav-link" to={"./About"}>About</Link>
      <Link className="nav-link" to={"./Teams"}>Teams</Link>
      <Link className="nav-link" to={"./Product"}>Product</Link>
      <Link className="nav-link" to={"./List"}>List</Link>
      <Link className="nav-link" to={"./SearchUser"}>Search</Link>
    </Nav>
    <div className="navbar-nav">
    <FontAwesomeIcon icon="fa-solid fa-alarm-clock" />
           <Link to="AddToCart" className="nav-link">Add to card   </Link>
       </div>
    </Container>
  </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="About" element={<About />} />
          <Route path="Teams" element={<Teams />} />
          <Route path="Product" element={<Product />} />
          <Route path="List" element={<List />} />
          <Route path="SearchUser" element={<SearchUser />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;
