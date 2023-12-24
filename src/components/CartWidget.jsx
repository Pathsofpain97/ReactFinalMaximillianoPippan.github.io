import {Link} from "react-router-dom" 
import cart from '../assets/carritto.png'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";



export const CartWidget = () => {
    const {items} = useContext(CartContext)

    const total = items.reduce((acumulador,valorActuar) => acumulador + valorActuar.quantity, 0);

    return (
        <Link className="linkc" to="/cart">
        <img src={cart} alt="Carrito" width={110} />
            <span className="numero">{total}</span>
        </Link>
    );
}; 