import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then( result => {
            const user = result.user
            console.log(user)
        })
        .catch( error => {
            console.error(error)
        })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h3 className='mb-3'>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook className='me-2'></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter className='me-2'></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram className='me-2'></FaInstagram> Instagrams</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp className='me-2'></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYoutube className='me-2'></FaYoutube> Youtube</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;