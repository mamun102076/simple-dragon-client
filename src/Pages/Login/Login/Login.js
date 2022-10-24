import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from.pathname || '/' 
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            if (user.emailVerified) {
                navigate(from, {replace: true})
            } else {
                toast.success('please verify email first')
            }
            form.reset()
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <p className='text-danger'><small>{error}</small></p>
        </Form>
    );
};

export default Login;