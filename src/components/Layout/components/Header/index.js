import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import {
    PaperPlaneIcon,
    MessageIcon,
    ContentIcon,
    LanguageIcon,
    QuestionIcon,
    KeyBoardIcon,
    MoonIcon,
    UserIcon,
    BookMarkIcon,
    CoinsTikTokIcon,
    LiveStreamIcon,
    SettingIcon,
    LogoutIcon,
    PlusIcon,
    EllipsisIcon,
} from '~/components/Icons';
import Search from '../Search';
import routesConfig from '~/config/routes';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <ContentIcon />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
    },
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <KeyBoardIcon />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <MoonIcon />,
        title: 'Chế độ tối',
        toggle: true,
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem);
                break;
            case 'board':
                console.log(menuItem);
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'Xem hồ sơ',
            to: '/@nari_gamingg',
        },
        {
            icon: <BookMarkIcon />,
            title: 'Yêu thích',
            to: '/@nari_gamingg',
        },
        {
            icon: <CoinsTikTokIcon />,
            title: 'Nhận Xu',
            to: '/coin',
        },
        {
            icon: <LiveStreamIcon />,
            title: 'LIVE Studio',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    let newMenu = userMenu[4];
    userMenu[4] = userMenu[5];
    userMenu[5] = newMenu;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="tiktok"></img>
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    <Button text leftIcon={<PlusIcon />}>
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <PaperPlaneIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn', 'mailbox')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                width="32"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/dd37b932b9ec183ecf897f470015ad58.jpeg?lk3s=a5d48078&x-expires=1713510000&x-signature=jyJC0F3w7fO%2BhVqUDJqEDdTHK24%3D"
                                className={cx('user-avatar')}
                                alt="Ngọc Kunn"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <EllipsisIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
