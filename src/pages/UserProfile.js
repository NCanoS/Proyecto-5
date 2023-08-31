import { Button, Container, FormLabel } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-router-dom";

const UserProfile = () => {
    const [user, setUser] = useState({
        usertag: "",
        email: "",
        password: ""
    });

    const [isEditing,setIsEditing] = useState(false);

    useEffect(() => {
        axios.get("http://localhost3030/user").then((response)=>{
            setUser(response.data);
        });
    }, []);

    const handleTagChange = (e) => {
        const { usertag, value } = e.target;
        setUser({ ...user, [usertag]: value });
      };
      
      const handleEmailChange = (e) => {
        const { username, value } = e.target;
        setUser({ ...user, [username]: value });
      };

      const handlePasswordChange = (e) => {
        const { password, value } = e.target;
        setUser({ ...user, [password]: value });
      };

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.post("http://localhost3030/user", user).then((response) => {
          console.log(response);
        });
        setIsEditing(false);
      }

    const handleCancel = (e) => {
      e.preventDefault();
      setIsEditing(false);
    }

    return(
    <>
        <Header/>
        <Container>
            <h1>Your Profile</h1>
            <Form onSubmit={handleUpdate}>
                <FormLabel className="mb-3 justify-content-md-center">Nombre</FormLabel>
                <input className="mb-3 justify-content-md-center" type='text' required name='usertag' value={user.usertag} onChange={(e) => handleTagChange(e.target.value)} disabled={!isEditing}/> 
                <Form.Group controlId="formBasicEmail">
                <FormLabel className="mb-3 justify-content-md-center">Correo</FormLabel>
                <br></br>
                <input className="mb-3 justify-content-md-center" type='email' required name='email' value={user.username} onChange={(e) => handleEmailChange(e.target.value)} disabled={!isEditing}/> 
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                <FormLabel className="mb-3 justify-content-md-center">Contraseña</FormLabel>
                <br></br>
                <input className="mb-3 justify-content-md-center" type='password' required name='password' value={user.password} onChange={(e) => handlePasswordChange(e.target.value)} disabled={!isEditing}/>
                </Form.Group>
                <Button type="submit" disabled={!isEditing}>Guardar</Button>
                <Button type="cancel" onClick={handleCancel} disabled={!isEditing}>Cancelar</Button>
                <Button type="cancel" onClick={() => setIsEditing(true)}>Cancelar</Button>
                </Form>
        </Container>
        <Footer/>
    </>
    )
}
export default UserProfile;