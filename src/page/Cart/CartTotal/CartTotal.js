import classNames from "classnames/bind";
import styles from "./CartTotal.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CartTotal() {
    return (
        <div className={cx("total")}>
            <div className={cx("total__header")}>
                <h3 className={cx("total__name")}>Tổng tiền:</h3>
                <h3 className={cx("total__number")}>10000000 đ</h3>
            </div>
            <Link className={cx("total__a")}>
                <div className={cx("total__action")}>
                    <h1 className={cx("total__title")}>Check out</h1>
                </div>
            </Link>
        </div>
    );
}

export default CartTotal;