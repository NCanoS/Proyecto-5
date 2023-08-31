//page for displaying product based on product id

import React, { useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Button, Container, Form, FormLabel } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { API_URL } from '../utils/constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axios } from 'axios';

//display product info based on product id

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [input, setInput] = useState(null);
    const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext);

    const onChange = (e) => setInput({...input, [e.target.name]: e.target.value});

    const handleAddToCart = async (event) => {
        event.preventDefault();

        const {data} = await axios.post(`${API_URL}/carts`, {
            userId: user.id,
            productId: product.id,
            quantity: 1,
        });

        toast.success('Product added to cart!');
        navigate('/cart');
    }

    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`${API_URL}/products/${id}`);
            setProduct(data);
        }

        fetchProduct();
    }, [id]);

    return(
        <>
        <Header />
        <Container className="mt-5">
            <h1 className="text-center">Product</h1>
            <hr />
            {product && (
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt={product.name} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.name}</h2>
                        <h3>$ {product.price}</h3>
                        <p>{product.description}</p>
                        <Button onClick={handleAddToCart}>Add to cart</Button>
                    </div>
                    
                </div>
            )}
            </Container>
            <Footer />
            </>
            )
        }
        
        export default Product;
