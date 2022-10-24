import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, updateUser, verifyEmail } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const PhotoURL = form.PhotoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, PhotoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setError('')
                handleUpdateUser(name,PhotoURL)
                handleEmailVerification()
                toast.success('please verify email')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const formCheck = (event) => {
        setAccepted(event.target.checked)
    }
    
    const handleUpdateUser = (name,photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
            .then(() => {})
            .catch(error => console.error(error))
    }

    const handleEmailVerification = () => {
        verifyEmail()
        .then( () => {})
        .catch( error => console.error(error))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='PhotoURL' type="text" placeholder="Enter PhotoURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={formCheck} type="checkbox" label={<span>please check our <Link to='/terms'>Terms & conditions</Link></span>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <p className='text-danger'><small>{error}</small></p>
        </Form>
    );
};

export default Register;