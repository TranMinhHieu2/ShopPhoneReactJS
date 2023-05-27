import styles from './Slider.module.scss';
import images from '~/assets/img';
import classNames from "classnames/bind";
// import config from '~/config';
import { Link } from 'react-router-dom';
// import Slider from "react-slick";

const cx = classNames.bind(styles);

// function SimpleSlider() {

//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         // autoplay: true,
//         // autoplaySpeed: 2000,
//     };

//     return (
//         <div className={cx('wrapper')}>
//             <Slider {...settings}>
//                 <div className={cx('item')}>
//                     <img src={images.slide1} alt="slide" />
//                 </div>
//                 <div className={cx('item')}>
//                     <img src={images.slide2} alt="slide" />
//                 </div>
//                 <div className={cx('item')}>
//                     <img src={images.slide3} alt="slide" />
//                 </div>
//                 <div className={cx('item')}>
//                     <img src={images.slide4} alt="slide" />
//                 </div>
//             </Slider>
//         </div>
//     );

// }

function SimpleSlider() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>

                <Link to={`/product/12`}>
                    <div className="slider__wrapper">
                        <img src={images.slide1} alt="slide" className={cx('imgitem')} />

                    </div>
                </Link>
                <div className={cx('slider__bottom')}>
                    <div className={cx("slider__bottom__list")}>
                        <div className={cx("slider__bottom__item")}>
                            <div className={cx("slider__bottom__item__link")}>
                                <p className={cx("slider__bottom__item__link__text__1st")}>Tháng thành viên</p>
                                <p className={cx("slider__bottom__item__link__text__2nd")}>Ưu đãi liên miên</p>
                            </div>
                            <div className={cx("slider__bottom__item__underline ")}></div>
                        </div>

                        <div className={cx("slider__bottom__item")}>
                            <div className={cx("slider__bottom__item__link")}>
                                <p className={cx("slider__bottom__item__link__text__1st")}>Z FOLD3 | Z FLIP3 5G</p>
                                <p className={cx("slider__bottom__item__link__text__2nd")}>Ưu đãi cực lớn</p>
                            </div>
                            <div className={cx("slider__bottom__item__underline")}></div>
                        </div>

                        <div className={cx("slider__bottom__item")}>
                            <div className={cx("slider__bottom__item__link")}>
                                <p className={cx("slider__bottom__item__link__text__1st")}>XIAOMI 11T SERIES</p>
                                <p className={cx("slider__bottom__item__link__text__2nd")}>Đặt trước ưu đãi khủng</p>
                            </div>
                            <div className={cx("slider__bottom__item__underline")}></div>
                        </div>

                        <div className={cx("slider__bottom__item")}>
                            <div className={cx("slider__bottom__item__link")}>
                                <p className={cx("slider__bottom__item__link__text__1st")}>ZENBOOK 12 OLED</p>
                                <p className={cx("slider__bottom__item__link__text__2nd")}>Giá tốt mua ngay</p>
                            </div>
                            <div className={cx("slider__bottom__item__underline")}></div>
                        </div>

                        <div className={cx("slider__bottom__item")}>
                            <div className={cx("slider__bottom__item__link")}>
                                <p className={cx("slider__bottom__item__link__text__1st")}>Loa JBL CHARGE 5</p>
                                <p className={cx("slider__bottom__item__link__text__2nd")}>Mở bán giá tốt</p>
                            </div>
                            <div className={cx("slider__bottom__item__underline")}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("img3")}>
                <div className={cx("slide__ads__wrapper ")}>
                    <Link to={`/product/3`}>
                        <img className={cx('img3__item')} src={images.img3_1} alt='31' />
                    </Link>
                </div>
                <div className={cx("slide__ads__wrapper ")}>
                    <Link to={`/product/13`}>
                        <img className={cx('img3__item')} src={images.img3_4} alt='31' />
                    </Link>
                </div>
                <div className={cx("slide__ads__wrapper ")}>
                    <Link to={`/product/18`}>
                        <img className={cx('img3__item')} src={images.img3_3} alt='31' />
                    </Link>
                </div>
            </div>
        </div>
    )

}
export default SimpleSlider;

