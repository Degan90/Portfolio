import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

function Navigation(props) {
  return (
    <div>
		<Navbar  bg="none" variant="dark"  expand='lg'  collapseOnSelect={true}>
			<Container>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
					<Nav className='ml-auto'>
						<LinkContainer to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/about'>
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/projects'>
							<Nav.Link>Projects</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/contact'>
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/resume'>
            <Button className="btnNav" variant="outline-success" href="#">
            Resume
          </Button>
						</LinkContainer>
					</Nav>
	
				</Navbar.Collapse>
			</Container>
		</Navbar>
    </div>
  );
}

export default Navigation;
