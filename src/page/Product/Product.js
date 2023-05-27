import classNames from "classnames/bind";
import styles from './Product.module.scss';
import DetailProduct from "./DetailProduct/DetailProduct";


const cx = classNames.bind(styles);

function Product() {

    return (
        <div className={cx('wrapper')}>
            <DetailProduct />
        </div>
    );
}

export default Product;