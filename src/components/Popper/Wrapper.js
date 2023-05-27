import classNames from "classnames/bind";
import styles from './Popper.module.scss'

const cx = classNames.bind(styles);

function Wrapper({ childrend }) {
    return <div className={cx('wrapper')}>
        {childrend}
    </div>
}

export default Wrapper;