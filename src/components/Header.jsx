import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext.jsx';
import { useContext } from 'react';
import UserProgressContext from '../store/UserProgressContext.jsx';
import { FaShoppingCart } from "react-icons/fa";

export default function Header(){
    const userProgressCtx = useContext(UserProgressContext);
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems,item)=>{
        return totalNumberOfItems + item.quantity;
    },0);

    function handleShowCart(){
        userProgressCtx.showCart();
    }

    return (
    <header id="main-header">
        <div id="title">
            <img src={logoImg} alt='A restaurant' />
            <h1>REACTFood</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>
                <FaShoppingCart /> 
                <span>({totalCartItems})</span> {/* تعداد آیتم‌های سبد */}
            </Button>
        </nav>
    </header>);
}