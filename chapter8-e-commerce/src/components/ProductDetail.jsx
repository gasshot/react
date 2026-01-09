import React from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {

    const {productId} = useParams();
    return (
        <div>Product Detail : {productId}</div>
    )
}

export default ProductDetail