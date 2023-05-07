import React from "react"
import { useRouter } from "next/router"

const ProductItem = () => {
    const router = useRouter()

    const { productId } = router.query;


    return (
        <div>
            <h1>Esta es la pagina del producto {productId}</h1>
        </div>
    )
}

export default ProductItem
