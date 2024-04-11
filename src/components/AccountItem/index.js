import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dd37b932b9ec183ecf897f470015ad58~c5_300x300.webp?lk3s=a5d48078&x-expires=1712980800&x-signature=FWKhsdMylWga6lO8E7tUNF1gH6A%3D"
                alt="Ngoc"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>nari_gamingg</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Ngọc Kunn</span>
            </div>
        </div>
    );
}

export default AccountItem;
