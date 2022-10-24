import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
        .then( () => {})
        .catch( error => console.error(error))
    } 
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-4'>
            <Container>
                <Link to='/'>Simple Dragon</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Categoris</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav>
                            {
                                user?.uid ? 
                                <span>{user.displayName} <Button onClick={handleSignOut} variant="light">Logout</Button></span> 
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                            }
                        </Nav>
                        <Link to='/profile'>
                            {
                                user?.photoURL ? <Image  style={{'height': '30px'}} roundedCircle  src={user.photoURL}></Image>
                                : <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;