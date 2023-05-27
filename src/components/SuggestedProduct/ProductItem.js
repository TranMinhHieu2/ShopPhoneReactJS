import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import ProductPreview from './ProductPreview/ProductPreview';
import styles from './SuggestedProduct.module.scss';

const cx = classNames.bind(styles);

function ProductItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <ProductPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('Product-item')}>
                    <img
                        className={cx('Product')}
                        src="https://cdn2.cellphones.com.vn/40x,webp,q100/media/catalog/product/t/_/t_m_18.png"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>I Phone 14</strong>
                        </p>
                        <p className={cx('name')}>230000$</p>
                    </div>
                </div>

            </Tippy>
        </div>
    );
}

ProductItem.propTypes = {};

export default ProductItem;