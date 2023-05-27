import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedProduct.module.scss';
import ProductItem from './ProductItem';

const cx = classNames.bind(styles);

function SuggestedProduct({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <ProductItem />
            <ProductItem />
            <ProductItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedProduct.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedProduct;