import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    const [name,setName] = useState(user.displayName)
    const PhotoURLRef = useRef(user.photoURL)
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name,PhotoURLRef.current.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} name='name' type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL:</Form.Label>
                <Form.Control ref={PhotoURLRef} defaultValue={user.photoURL} name='PhotoURL' type="text" placeholder="Enter PhotoURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control defaultValue={user.email} name='email' type="email" placeholder="Enter email" readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update Profile
            </Button>
        </Form>
    );
};

export default Profile;