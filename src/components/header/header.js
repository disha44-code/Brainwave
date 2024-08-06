"use client";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
   <>
   <Navbar collapseOnSelect expand="lg" className="">
      <Container className=''>
        <div>
      <Image
      src="/brain.png"
      width={154}
      height={28}
      alt="logo"
      className='logo'
    /></div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav basic-navbar-nav" className='p-0'>
          <Nav className="navbar p-0">
            <Nav.Link href="#demos" className='link'>Demos</Nav.Link>
            <Nav.Link href="#pages" className='link'>Pages</Nav.Link>
            <Nav.Link href="#support" className='link'>Support</Nav.Link>
            <Nav.Link href="#contact" className='link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
          <div className='ms-auto'>
            <Button variant="primary" className='btn-custom btn-blue-cust'>Get started a project</Button>
          </div>  
      </Container>
    </Navbar>
   </>
  )
}

export default Header

