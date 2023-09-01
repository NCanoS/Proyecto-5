//page for displaying product based on product id

import React, { useEffect, useState }from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Button, Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { API_URL } from '../utils/constants';
import axios from 'axios';

//display product info based on product id

const Product = () => {
    const location = useLocation();
    const [product, setProduct] = useState(null);
    let productID = location.state.productID;

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const response = await axios.get("http://localhost:3030/products/"+productID);
            setProduct(response.product);
            }
            catch(error){
                console.error(error);
            }
        }

        fetchProduct();
    }, [productID]);

    return(
        <>
        <Header />
        <Container className="mt-5">
            <h1 className="text-center">Producto</h1>
            <hr />
            {product && (
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.imageUrl} alt={product.title} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.title}</h2>
                        <h3>$MXN {product.price}</h3>
                        <p>{product.description}</p>
                        <Button href='/checkout'>Comprar</Button>
                    </div>
                    
                </div>
            )}
            </Container>
            <Footer />
            </>
            )
        }
        
        export default Product;
