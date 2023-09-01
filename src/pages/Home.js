import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState, React } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { productData } from "../utils/product.data";


//create cards for products
const ProductCard = ({id,title, description, price, imageUrl}) => {
    //add navigation to go to product page
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/product", {state: {productID:id}});
    }

    return(
        <Row style={{maxWidth:"60%"}} className="w-100 mx-auto">
            <Col>
        <Card onClick={handleClick} style={{backgroundColor:"#7cdaf9"}} className="w-100 shadow-lg p-3 mb-5 rounded hover-zoom">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title className="fw-bolder fst-italic">{title}</Card.Title>
                <Card.Text hidden>{id}</Card.Text>
                <Card.Text className="font-weight-bold">
                    <p className="font-weight-bold">
                        Descripción:
                    </p>
                    <p>{description}</p>  
                </Card.Text>
                <Card.Text>
                    Precio: {price} MXN
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                </Row>
            )
            }


function Home() {

    //create cards from getproducts from backend
    const productCards = productData.map((product) => {
        return(
            <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
            />
        )
    }
    )

    return(
        <>
            <Header/>
            <Container fluid className="mx-5 my-5">
                {productCards}
            </Container>
            <Footer/>
        </>
    )

}
export default Home;