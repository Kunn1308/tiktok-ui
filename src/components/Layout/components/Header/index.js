import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
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
    SearchIcon,
} from '~/components/Icons';
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
                    children: {
                        title: 'bàn phím',
                        data: [
                            {
                                type: 'board',
                                code: 'vn',
                                title: 'Tiếng Việt 1',
                            },
                            {
                                type: 'board',
                                code: 'en',
                                title: 'English 1',
                            },
                        ],
                    },
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
    const [searchResult, setSearchResult] = useState([]);
    const [searchinfo, setSearchInfo] = useState();
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

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
                    <img src={images.logo} alt="tiktok"></img>
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <p className={cx('search-footer')}>{`Xem tất cả kết quả dành cho "${searchinfo}"`}</p>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Tìm kiếm"
                            onChange={(e) => setSearchInfo(e.target.value)}
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                        <div className={cx('border')}></div>
                    </div>
                </HeadlessTippy>
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
                                <button className={cx('action-btn')}>
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
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5ddbe69c49c17c1c5c513ec967b1871e.jpeg?lk3s=a5d48078&x-expires=1713236400&x-signature=otkNrOln0NyRlOx4iW8T02pfr6I%3D"
                                className={cx('user-avatar')}
                                alt="Ngọc Kunn"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
