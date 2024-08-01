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
   <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className=''>
        <div>
      <Image
      src="/brain.png"
      width={154}
      height={28}
      alt="logo"
      className='logo'
    /></div>
        <Navbar id="responsive-navbar-nav">
          <Nav className="navbar">
            <Link href="/demos" className='link'>Demos</Link>
            <Link href="/pages" className='link'>Pages</Link>
            <Link href="/support" className='link'>Support</Link>
            <Link href="/contact" className='link'>Contact</Link>
          </Nav>
        </Navbar>
          <div className='ms-auto'>
            <Button variant="primary">Get started a project</Button>
          </div>  
      </Container>
    </Navbar>
   </>
  )
}

export default Header