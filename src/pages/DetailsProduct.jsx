import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Fragment, useEffect,useState } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useContext } from "react";


import { ItemCounter } from "../components/ItemCounter"
import { CartContext } from "../context/CartContext";

export function DetailsProduct() {
    const [products,setProducts]=useState(null)
    const {id} = useParams()
    const {onAdd} = useContext(CartContext)

    const Add = (quantity) =>{
      onAdd(products,quantity);
    }

    useEffect(()=>{
        const db = getFirestore();
        const docRef = doc(db, "products", id);

        getDoc(docRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                setProducts({id: docSnapshot.id, ...docSnapshot.data()});
            } else {
                console.log("No such document!");
            }
        });
    },[id])

    return (
        <Container className='pc mt-2'>
            {products && <Fragment>
            <div className="dimg text-center">
            <img className="img" src={`${products.imgURL}`} alt={products.title} />
            </div>            
            <h1 className="pct">{products.title}</h1>
            <p className="pctx1">${products.price}</p>
            <ItemCounter onAdd ={Add} stock= {products.stock} initial= {1}/>
            </Fragment>}
        </Container>
    );
}
