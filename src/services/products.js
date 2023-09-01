import axios from "axios"

//get products
const getProducts = async () => {
    try {
        const response = await axios.get(
            'http://localhost:3000/products'
        )
        console.log(response);
        return response.data
        
    }
    catch (error) {
        console.log(error)
    }
    
}

export default getProducts;