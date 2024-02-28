import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utilis/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="p-4 w-6/12 mx-auto my-20">
            <div className="flex justify-between p-6">
                <h1 className="text-xl font-bold">Cart</h1>
                <button className="bg-black px-2 text-white rounded-sm cursor-pointer" onClick={handleClearCart}> Clear Cart </button>
            </div>
            <div><ItemList Items={cartItems}/></div>
        </div>
    )
};

export default Cart;