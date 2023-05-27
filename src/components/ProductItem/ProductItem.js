import classNames from "classnames/bind";
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://cdn2.cellphones.com.vn/40x,webp,q100/media/catalog/product/t/_/t_m_18.png" alt="I-phone" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>I Phone 14</span>
                </h4>
            </div>
        </div>
    );
}

export default ProductItem;