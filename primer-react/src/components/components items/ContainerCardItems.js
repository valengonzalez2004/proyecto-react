import CardItem from "./CardItem";
import fetchSimulation from "../../utils/fetchSimulation";
import products from "../../utils/products";
import { useState, useEffect } from "react";

const ContainerCardItems = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetchSimulation(products, 3000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="containerCardItems">
            {
                datos.map( products =>  ( 
                    <CardItem
                        key={products.id}
                        image={products.imageProduct.firstImage}
                        title={products.title}
                        cantidad={products.stock}
                        precio={products.price}
                    />

                    ))
            }
        </div>
    )
}

export default ContainerCardItems;  