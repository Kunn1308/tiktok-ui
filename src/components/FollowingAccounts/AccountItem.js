import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import { TickIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avartar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/821d51ab2db5f3c8f748690d2b9aadeb.jpeg?lk3s=a5d48078&x-expires=1713711600&x-signature=CqQSb58WiPVe4osuZeZ0qmEBpBQ%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>ttechstore</strong>
                    {/* <TickIcon className={cx('check')} /> */}
                </p>
                <p className={cx('name')}>T-Tech</p>
            </div>
        </div>
    );
}

export default AccountItem;
