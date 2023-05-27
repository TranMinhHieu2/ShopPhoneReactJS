
import classNames from 'classnames/bind';
import styles from './Phone.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Phone({ id, imgphone, namephone, newprice, oldprice }) {
    return (
        // `/${id}`
        <Link to={`/product/${id}`} className={cx('wrapper')} >
            {/* <Link to={`/products/${product.id}`}>{product.name}</Link> */}
            <div className={cx('flash-sale')}>
                <p>Giảm 10%</p>
            </div>
            <div className={cx('phone-image')}>
                <img src={imgphone} alt='phone' />
            </div>
            <div className={cx('phone-Info')}>
                <div className={cx('phone-title')}>
                    {namephone}
                </div>
                <div className={cx('phone-price')}>
                    <div className={cx('phone-price-sale')}>{newprice} đ</div>
                    <div className={cx('phone-price-origin')}>{oldprice} đ</div>
                </div>
                <div className={cx('phone-note')}>
                    <p>"[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và 1 km khác"</p>
                </div>
                <div className={cx('phone-evaluate')}>
                    <div className={cx('phone-evaluate-star')}>
                        <FontAwesomeIcon className={cx('star')} icon={faStar} />
                        <FontAwesomeIcon className={cx('star')} icon={faStar} />
                        <FontAwesomeIcon className={cx('star')} icon={faStar} />
                        <FontAwesomeIcon className={cx('star')} icon={faStar} />
                        <FontAwesomeIcon className={cx('star')} icon={faStar} />
                    </div>
                    <div className={cx('phone-evaluate-quantity')}>
                        <p>10k đánh giá</p>
                    </div>

                </div>


            </div>

        </Link >
    );
}


export default Phone;
