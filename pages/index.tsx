import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import { useRouter } from "next/router"

const Home = () => {
    const Router = useRouter()
    const [productList, setProductList] = useState<TProduct[]>([])

    useEffect(() => {
        window.fetch("http://localhost:3000/api/avo")
        .then((response:any) => 
            response.json()
        ).then(({ data, length }) => {
            setProductList(data
        )})
    },[])

    return (
        <div>
            <NavBar />
            <h1>Home</h1>
            {productList.map((product:any) => (
                <div onClick={ () => Router.push(`/product/${product.id}`)}>{product.name}</div>
            ) )}
        </div>
    )
}

export default Home