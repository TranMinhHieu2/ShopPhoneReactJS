import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import { useEffect, useState } from 'react';
// su dung anh 
import images from '~/assets/img';
// tippy react
import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '~/components/Popper';
// su dung icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { /*faCircleXmark, faSpinner,*/ faMagnifyingGlass, faEllipsisVertical, /*faHouse*/ } from '@fortawesome/free-solid-svg-icons';
import ProductItem from '~/components/ProductItem';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0)
    }, [])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('logo')}>
                <img src={images.logo} alt="logo" />
            </Link>
            <Tippy
                interactive
                visible={searchResult.length > 0}

                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Product</h4>
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder='Search item' spellCheck={false} />
                    <button className={cx('clear')}>
                        {/* <FontAwesomeIcon icon={faCircleXmark} /> */}
                    </button>
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}


                    <button className={cx('search-but')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text to={config.routes.cart}>cart</Button>
                <Button primary to={config.routes.login}>Log in</Button>
                {/* <Button lefticon={<FontAwesomeIcon icon={faHouse} />}>Log in</Button> */}

                <button className={cx('more-btn')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>

            </div>
        </div>
    </header>;
}

export default Header;
