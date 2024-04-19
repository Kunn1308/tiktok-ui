import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import Image from '~/components/Image';
import {
    HomeIcon,
    HomeActiveIcon,
    UserLoginIcon,
    UserLoginActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    CompassIcon,
    CompassActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import FollowingAccounts from '~/components/FollowingAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    const IconImage = (
        <Image
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/dd37b932b9ec183ecf897f470015ad58.jpeg?lk3s=a5d48078&x-expires=1713672000&x-signature=N09adiY2Mk4M8R67%2FAzF7wuAYOc%3D"
        />
    );

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<UserLoginIcon />}
                    activeIcon={<UserLoginActiveIcon />}
                />
                <MenuItem
                    title="Bạn bè"
                    to={config.routes.friends}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Khám phá"
                    to={config.routes.explore}
                    icon={<CompassIcon />}
                    activeIcon={<CompassActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <MenuItem title="Hồ sơ" to={'/@nari_gamingg'} icon={IconImage} activeIcon={IconImage} />
            </Menu>

            <FollowingAccounts label="Các tài khoản đang follow" />
        </aside>
    );
}

export default Sidebar;
