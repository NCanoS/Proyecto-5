import { useState, useContext, useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Button, Container, Form, FormLabel } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Login = () =>{
    const [input,setInput] = useState(null);
    const[isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    const {saveUser} = useContext(UserContext);

    const onChange = (e) => setInput({...input, [e.target.name]: e.target.value});


    const handleLogin = async (event) => {
        event.preventDefault();
        
    try {
        const response = await axios.post('http://localhost:3030/api/login', input);
        console.log(response);
        if (response.data) {
            console.log(input.email);
            saveUser(input.email,input.password);
            localStorage.setItem('user', JSON.stringify(response.user));
            setIsAuth(true);
            return navigate('/home');
        }
    } catch (error) {
        console.error(error);
        alert("usuario o contraseña incorrectos");
    
    }        
    }

    return(
        <>
        <Header/>
        <Container fluid className="justify-content-center my-5 mx-5">
        <Form onSubmit={handleLogin} className="mx-5 my-2">
            <Form.Group controlId="formBasicEmail">
                <FormLabel>Correo</FormLabel>
                <br></br>
                <input type='email' required name='email' onChange={onChange}/> 
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
                <FormLabel>Contraseña</FormLabel>
                <br></br>
                <input type='password' required name='password' onChange={onChange}/>
            </Form.Group>
            <Button className="mx-5 my-2" type="submit">Iniciar Sesion</Button>
        </Form>
        <Link to="/register" className="link-secondary link-underline-opacity-0 link-underline-opacity-100-hover mx-5">¿No tienes una cuenta? Registrate</Link>
        </Container>
        <Footer />
        </>
        

    )
}
