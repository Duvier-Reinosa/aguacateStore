import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

const ProductItem = () => {
    const router = useRouter()
    const [product, setProduct] = useState<TProduct | null>(null)

    const { productId } = router.query;

    useEffect(() => {
        window.fetch(`http://localhost:3000/api/avo/${productId}`)
        .then((response:any) => 
            response.json()
        ).then(({ data, length }) => {
            setProduct(data
        )})
    },[])


    return (
        <div>
            <h1>Esta es la pagina del producto {product.name}</h1>
        </div>
    )
}

export default ProductItem
