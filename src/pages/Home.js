import { Card, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState, React } from "react";
import axios from "axios";


//create cards for products
const ProductCard = ({title, description, price, imageURL}) => {
    return(
        <Card style={{ width: '18rem' }}>
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