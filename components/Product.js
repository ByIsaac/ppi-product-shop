import { useContext } from 'react'
import { CartContext } from "../context/CartContext";

export default function Product({
    id,
    thumbnail,
    title,
    price,
    description
}) {

    const { addItemtoCart } = useContext(CartContext);
    return(
        <article className="product">
            <img src={thumbnail} alt={title} />
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className="product-price">$ {price}</p>
                    <p>{description}</p>
                </div>
                <p className="product-actions">
                    <button onClick={() => addItemtoCart} > Add to Cart </button>
                </p>
            </div>
        </article>
    );
}