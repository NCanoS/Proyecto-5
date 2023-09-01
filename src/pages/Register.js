import { Button, Col, Container, Form, FormLabel, Row } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useState, useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

//save user to local storage

export const Register = () => {
    //add isauth
    const [isAuth, setIsAuth] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const [input,setInput] = useState(null);
    const navigate = useNavigate();

    const onChange = (e) => setInput({...input, [e.target.name]: e.target.value});

    const handleRegister = async (event) =>{
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3030/register', input);
            if (!response.data) {
                setUser(response.user);
                //save to local storage
                localStorage.setItem('user', JSON.stringify(response.user));
                setIsAuth(true);
                alert(response.data.message);
                return navigate('/');
            }
            
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <>
            <Header/>
            <Container fluid>
            
                
                <Form onSubmit={handleRegister}>
                <Row>
                <Col className="p-4">
                <Form.Group className="mb-3">
                <Form.Label className="mb-3 justify-content-md-center px-1">Nombre</Form.Label>
                <input className="mb-3 justify-content-md-center" type='text' name='firstName' onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label className="mb-3 justify-content-md-center px-1">Apellido</Form.Label>
                <input className="mb-3 justify-content-md-center" type='text' name='lastName' onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label className="mb-3 justify-content-md-center px-1">Edad</Form.Label>
                <input className="mb-3 justify-content-md-center" type='number' name='age' onChange={onChange}/>
                </Form.Group>
                </Col>
                <Col className="p-4">
                <Form.Group className="mb-3">
                <Form.Label className="mb-3 justify-content-md-center px-1">Género</Form.Label>
                <input className="mb-3 justify-content-md-center" type='text' name='gender' onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label className="mb-3 justify-content-md-center px-1">País</Form.Label>
                <input className="mb-3 justify-content-md-center" type='text' name='country' onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label className="mb-3 justify-content-md-center px-1">Ciudad</Form.Label>
                <input className="mb-3 justify-content-md-center" type='text' name='city' onChange={onChange}/>
                </Form.Group>
                </Col>
                </Row>
                <Form.Group controlId="formBasicEmail">
                <FormLabel className="mb-3 justify-content-md-center px-1">Correo</FormLabel>
                <input className="mb-3 justify-content-md-center" type='email' required name='email' onChange={onChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <FormLabel className="mb-3 justify-content-md-center px-1">Contraseña</FormLabel>
                    <input className="mb-3 justify-content-md-center" type='password' required name='password' onChange={onChange}/>
                </Form.Group>
                <Button type="submit">Registrarse</Button>
                </Form>
                <Link to="/login" className="link-secondary link-underline-opacity-0 link-underline-opacity-100-hover">¿Ya tienes una cuenta? Inicia Sesión</Link>
                </Container>
                <Footer/>
                
        </>
        
    )
}

export default Register;