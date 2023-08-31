import { Card, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState, React } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


//create cards for products
const ProductCard = ({id,title, description, price, imageURL}) => {
    //add navigation to go to product page
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/product/${id}`);
    }

    return(
        <Card onClick={handleClick} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {price}
                </Card.Text>
                </Card.Body>
                </Card>
            )
            }

    

function Home() {
    const {products,setProducts} = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost3000/').then((response)=>{
            setProducts(response.data);
        });
    }, []);

    //create cards from getproducts from backend
    const productCards = products.map((product) => {
        return(
            <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imageURL={product.imageURL}
            />
        )
    }
    )

    return(
        <>
            <Header/>
            <Container>
                {productCards}
            </Container>
            <Footer/>
        </>
    )

}
export default Home;