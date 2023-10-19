import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';


function Register() {
        const dispatch = useDispatch();
        const [values, setvalues] = useState('');
        const handleInputchange = (e) => {
                setvalues({ ...values, [e.target.name]: e.target.value })
        }

        return (
                <div className="container d-flex justify-content-center align-item-center " style={{ height: 'auto', }}>
                        <Form className='mt-5 mb-5 bg-dark p-4' style={{ borderRadius: '10px', }}>
                                <div className="h2 my-2 text-center text-white">Register </div>
                                <Form.Group className="mb-3 my-2" controlId="formBasicEmail">
                                        <Form.Label className='text-white'>Name</Form.Label>
                                        <Form.Control type="text" onChange={handleInputchange} name='name' placeholder="Enter your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3 my-2" controlId="formBasicEmail">
                                        <Form.Label className='text-white'>Email address</Form.Label>
                                        <Form.Control onChange={handleInputchange} type="email" name='email' placeholder="Enter email" />
                                        <Form.Text className=" text-white">
                                                We'll never share your email with anyone else.
                                        </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3 my-2" controlId="formBasicPassword">
                                        <Form.Label className='text-white' >Password</Form.Label>
                                        <Form.Control onChange={handleInputchange} type="password" name='password' placeholder="Password" />
                                </Form.Group>

                                <Button variant="success w-100 my-3" type="submit">
                                        Submit
                                </Button>
                        </Form>
                </div>
        );
}

export default Register;