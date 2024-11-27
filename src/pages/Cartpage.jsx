import Cart from "../components/Cart";


export default function Cartpage({cart,setCart}){
    return(
        <>
        <Cart cart={cart} setCart={setCart}/>

        </>
    )
}