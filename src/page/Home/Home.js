import classNames from "classnames/bind";
import styles from './Home.module.scss';
import Phone from "./Phone/Phone";
import SimpleSlider from "./Slider/Slider";
import { ProductArr } from "~/components/ProductAction/ProductData";

const cx = classNames.bind(styles);

function Home() {
    const products = ProductArr.map(product => {
        return (
            <Phone

                key={product.id}
                id={product.id}
                imgphone={product.imgphone}
                namephone={product.namephone}
                newprice={product.newprice}
                oldprice={product.oldprice}
            />
        );
    });
    return (

        <div className={cx('container')}>
            <SimpleSlider />
            <div className={cx('wrapper')}>
                {products}

            </div>
        </div>
    );
}
export default Home;