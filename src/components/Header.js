//Compunents
import { Link } from 'react-router-dom';
import logo from '../assets/landingpage-logo.png'

//Styles
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { BagHeart } from 'react-bootstrap-icons';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


function Header() {
    let loginButton = null;
    let profileButton = null;
    
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setIsAuth(true);
        }
        else {
            setIsAuth(false);
        }
        }
        , []);
    
    if (isAuth) {
        loginButton = <Button variant='primary' href='/userprofile' hidden> Iniciar Sesion </Button>;
            profileButton = <Button variant='primary' href='/login' > Perfil </Button>;
    }else{
        loginButton = <Button variant='primary' href='/login' > Iniciar Sesion </Button>;
            profileButton = <Button variant='primary' href='/userprofile'hidden> Perfil </Button>;
    }
    
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className='px-lg-3'>
            <Navbar.Brand>
                <Link to='/' className="nav-link active" aria-current="page">
                <Image src={logo} fluid rounded width="50"/></Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to='/' className="nav-link active" aria-current="page">
                Papeleria Ucamp</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav variant="pills" defaultActiveKey="/#home" className="me-auto " style={{ maxHeight: '100px', color:"#b6ffff"}} navbarScroll>
                    <Nav.Link href="/">Productos</Nav.Link>
                    <Nav.Link href="/login">{loginButton}</Nav.Link>
                    <Nav.Link href='/userprofile'>{profileButton}</Nav.Link>
                    <Nav.Link href="/checkout"><Button variant='warning'>
                    <h6><BagHeart className='justify-content-center'/></h6>
                </Button></Nav.Link>
                </Nav>
                </Navbar.Collapse>

        </Navbar>
    )
}

export default Header;