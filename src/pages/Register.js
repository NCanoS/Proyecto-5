import { Button, Container, Form, FormLabel } from "react-bootstrap";
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
            const response = await axios.post('http://localhost:3000/register', input);
            if (!response.data) {
                setUser(response.data.user);
                //save to local storage
                localStorage.setItem('user', JSON.stringify(response.data.user));
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
                <Form.Label className="mb-3 justify-content-md-center">Nombre</Form.Label>
                <input className="mb-3 justify-content-md-center" type='text' required name='firstName' onChange={onChange}/>
                <Form.Label className="mb-3 justify-content-md-center">Apellido</Form.Label>
                <input className="mb-3 justify-content-md-center" type='text' required name='lastName' onChange={onChange}/>
                <Form.Label className="mb-3 justify-content-md-center">Edad</Form.Label>
                <input className="mb-3 justify-content-md-center" type='number' required name='age' onChange={onChange}/>
                <Form.Label className="mb-3 justify-content-md-center">Género</Form.Label>
                <input className="mb-3 justify-content-md-center" type='text' required name='gender' onChange={onChange}/>
                <Form.Label className="mb-3 justify-content-md-center">País</Form.Label>
                <input className="mb-3 justify-content-md-center" type='text' required name='country' onChange={onChange}/>
                <Form.Label className="mb-3 justify-content-md-center">Ciudad</Form.Label>
                <input className="mb-3 justify-content-md-center" type='text' required name='city' onChange={onChange}/>
                <Form.Group controlId="formBasicEmail">
                <FormLabel className="mb-3 justify-content-md-center">Correo</FormLabel>
                <br></br>
                <input className="mb-3 justify-content-md-center" type='email' required name='email' onChange={onChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <FormLabel className="mb-3 justify-content-md-center">Contraseña</FormLabel>
                    <br></br>
                    <input className="mb-3 justify-content-md-center" type='password' required name='password' onChange={onChange}/>
                    
                </Form.Group>
                <Button type="submit">Registrarse</Button>
                </Form>
                <Link to="/login" className="link-secondary link-underline-opacity-0 link-underline-opacity-100-hover">¿Ya tienes una cuenta? Registrate</Link>
                </Container>
                <Footer/>
                
        </>
        
    )
}

export default Register;