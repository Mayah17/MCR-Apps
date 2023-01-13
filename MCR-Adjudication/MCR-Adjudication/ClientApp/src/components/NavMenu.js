import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import './NavMenu.css';

function NavMenu (props) {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  const logout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">MCR Adjudication</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                {/* <NavLink className="text-dark" >Logout</NavLink> */}
                <button className='btn btn-md' onClick={logout}>Logout</button>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
}


export default NavMenu