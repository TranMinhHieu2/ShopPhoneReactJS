import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import images from "~/assets/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CartItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx("container")}>
                <div className={cx("product")}>
                    <div className={cx("product__item")}>
                        <div className={cx("p__img")}>
                            <img src={images.imagePhone} alt="#" />
                        </div>

                        <div className={cx("p__ifo")}>
                            <div className={cx("p__name")}>
                                <h3 className={cx("namep")}>iPhone 14 Pro Max 128GB | Chính hãng VN/A
                                </h3>
                                <Link >
                                    <FontAwesomeIcon icon={faTrashAlt} className={cx('icon__namep')} />
                                </Link>
                            </div>

                            <div className={cx("p__price")}>
                                <h3 className={cx("p__price__number")}>26.490.000 đ</h3>
                                <p className={cx("p__old__price__number")}>29.990.000 đ</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default CartItem;