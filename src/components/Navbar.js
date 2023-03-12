import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';

export default function NavBar() {
  const [cartView, setCartView] = useState(false);
  const data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <Navbar expand="lg" variant="dark"sticky="top" style={{ backgroundColor: '#bc2f2f' }}>
      <Container>
        <Link className="navbar-brand fs-2" to="/" style={{ fontWeight: 'bold' }}>
         
          Zwigato
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link fs-5" to="/">
              Home
            </Link>
            {localStorage.getItem('authToken') && (
              <Link className="nav-link fs-5" to="/myOrder">
                My Orders
              </Link>
            )}
          </Nav>
          {localStorage.getItem('authToken') ? (
            <div className="d-flex align-items-center">
              <div className="btn btn-outline-light mx-3" onClick={() => setCartView(true)}>
                <i className="bi bi-cart-fill me-2" />
                My Cart{' '}
                <Badge pill bg="danger">
                  {data.length}
                </Badge>
              </div>
              <div className="btn btn-outline-light" onClick={handleLogout}>
                Logout
              </div>
            </div>
          ) : (
            <div className="d-flex">
              <Link className="btn btn-outline-light mx-3" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline-light" to="/createUser">
                Sign Up
              </Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
      {cartView && (
        <Modal onClose={() => setCartView(false)}>
          <Cart />
        </Modal>
      )}
    </Navbar>
  );
}
