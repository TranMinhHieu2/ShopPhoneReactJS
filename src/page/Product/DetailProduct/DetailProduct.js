import styles from './DetailProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import config from '~/config';
import { Link } from 'react-router-dom';
import { CarttIcon } from '~/components/Icons';
import { useParams } from "react-router-dom";
import { ProductArr } from "~/components/ProductAction/ProductData";

const cx = classNames.bind(styles);

function DetailProduct() {

    const { id } = useParams()
    const thisproduct = ProductArr.find(prod => prod.id === id)

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('namePhone')}>
                    {thisproduct.namephone}

                </h2>

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

            <div className={cx('content')}>
                <div className={cx('phone__detail')}>
                    <div className={cx('imgPhone')}>

                        <img src={thisproduct.imgphone} alt='img' />
                    </div>

                    <div className={cx('detail__phone')}>
                        <h3 className={cx('header__detail')}>
                            TÍNH NĂNG NỔI BẬT
                        </h3>
                        <ul className={cx('content__detail')}>
                            <li> Màn hình Dynamic Island - Sự biến mất của màn hình tai thỏ thay thế bằng thiết kế viên thuốc, OLED 6,7 inch, hỗ trợ always-on display</li>
                            <li> Cấu hình iPhone 14 Pro Max mạnh mẽ, hiệu năng cực khủng từ chipset A16 Bionic</li>
                            <li> Làm chủ công nghệ nhiếp ảnh - Camera sau 48MP, cảm biến TOF sống động</li>
                            <li> Pin liền lithium-ion kết hợp cùng công nghệ sạc nhanh cải tiến</li>
                        </ul>
                    </div>
                </div>

                <div className={cx('phone__price')}>
                    <div className={cx('price')}>
                        <h4 className={cx('new__price')}>{thisproduct.newprice} đ</h4>

                        <p className={cx('old__price')}>{thisproduct.oldprice} đ</p>

                    </div>
                    <div className={cx('action')}>
                        <Button large to={config.routes.cart}>MUA NGAY</Button>
                        <Link className={cx('icon_cart')} to={config.routes.cart}>
                            <CarttIcon />
                        </Link>
                    </div>
                    <div className={cx('tragop')}>
                        <Button outline to={config.routes.login}>TRẢ GÓP 0%</Button>
                        <Button outline to={config.routes.login}>TRẢ GÓP THẺ</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;