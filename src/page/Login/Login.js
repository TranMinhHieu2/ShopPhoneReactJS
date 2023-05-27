import classNames from "classnames/bind";
import styles from './Login.module.scss';


const cx = classNames.bind(styles);


function Login() {
    return (
        <div className={cx('wrapper')}>
            <form action="" method="" className={cx('form')}>
                <h2 className={cx('header')}>Login form</h2>

                <div className={cx('input')}>

                    <div className={cx('ip-item')}>
                        <h4>Username</h4>
                        <input type="text" className={cx('i-ip')} placeholder="username" />
                    </div>

                    <div className={cx('ip-item')}>
                        <h4>Password</h4>
                        <input type="text" className={cx('i-ip')} placeholder="password" />
                    </div>

                </div>
                <p className={cx('forgot')}>Forgot password</p>
                <button className={cx('but')}>LOGIN</button>

                <div className={cx('type-login')}>

                    <div className={cx('type-login-item')}>

                    </div>
                </div>

                <div className={cx('footer')}>

                    <button className={cx('but-signup')}>SIGN UP</button>

                </div>

            </form>
        </div>
    );
}

export default Login;