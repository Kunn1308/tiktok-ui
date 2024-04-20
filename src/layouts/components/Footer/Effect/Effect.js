/* eslint-disable react/jsx-no-target-blank */
import classNames from 'classnames/bind';
import styles from './Effect.module.scss';

const cx = classNames.bind(styles);

function Effect() {
    return (
        <div className={cx('wrapper')}>
            <a
                className={cx('effect-link')}
                href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v1&utm_source=tiktok_webapp_main"
                target="_blank"
            >
                <img
                    className={cx('background')}
                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png"
                    alt=""
                />
                <p className={cx('title')}>Tạo hiệu ứng TikTok, nhận phần thưởng</p>
            </a>
        </div>
    );
}

export default Effect;
