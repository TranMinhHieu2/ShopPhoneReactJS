import classNames from "classnames/bind";
import styles from './cart.module.scss';
import CartItem from "./CartItem/CartItem";
import CartTotal from "./CartTotal/CartTotal";

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>

            <CartTotal />
        </div>
    );
}

export default Cart;