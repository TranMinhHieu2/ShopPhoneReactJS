
import Menu, { MenuItem } from "./Menu";
import config from '~/config';
import { HomeIcon, CarttIcon, CategoryItem } from "~/components/Icons";

import classNames from "classnames/bind";
import styles from './Sidebar.module.scss';

import SuggestedProduct from '~/components/SuggestedProduct';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} />
                {/* <MenuItem title="Product" to={config.routes.product} icon={<ProductIcon />} /> */}
                <MenuItem title="Cart" to={config.routes.cart} icon={<CarttIcon />} />
            </Menu>
            <div className={cx('CategoryItem')}>
                <CategoryItem />
                <h3>Category</h3>

            </div>
            <SuggestedProduct label="Suggested products" />
            <SuggestedProduct label="Top sale" />
            <div className={cx('footer')}>
                <h4 className={cx('f-h')}>Thông tin và chính sách</h4>
                <h5 className={cx('f-p')}>
                    Mua hàng và thanh toán Online
                </h5>
                <h5 className={cx('f-p')}>
                    Mua hàng trả góp Online
                </h5>
                <h4 className={cx('f-h')}>Tổng đài hỗ trợ miễn phí</h4>
                <h5 className={cx('f-p')}>
                    Gọi mua hàng 1800.2097 (7h30 - 22h00)
                </h5>
                <h5 className={cx('f-p')}>
                    Gọi khiếu nại 1800.2063 (8h00 - 21h30)
                </h5>


            </div>
        </aside>
    );
}

export default Sidebar;