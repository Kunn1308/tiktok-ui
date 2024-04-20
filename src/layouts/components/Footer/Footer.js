/* eslint-disable react/jsx-no-target-blank */
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Footer.module.scss';
import Effect from './Effect';
import FooterItem from './FooterItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

const FOOTER_ITEM = [
    {
        title: 'Công ty',
        textLink: [
            { title: 'Giới thiệu', link: 'https://www.tiktok.com/about?lang=vi-VN' },
            { title: 'Bảng tin', link: 'https://newsroom.tiktok.com/vi-vn/' },
            { title: 'Liên hệ', link: 'https://www.tiktok.com/about/contact?lang=vi-VN' },
            { title: 'Sự nghiệp', link: 'https://careers.tiktok.com/' },
        ],
    },
    {
        title: 'Chương trình',
        textLink: [
            { title: 'TikTok for Good', link: 'https://www.tiktok.com/for-good/' },
            {
                title: 'Quảng cáo',
                link: 'https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1',
            },
            {
                title: 'TikTok LIVE Creator Networks',
                link: 'https://www.tiktok.com/live/creator-networks/vi?enter_from=tiktok_official',
            },
            { title: 'Developers', link: 'https://developers.tiktok.com/?refer=tiktok_web' },
            { title: 'Minh bạch', link: 'https://www.tiktok.com/transparency/vi-vn/' },
            { title: 'Phần thưởng trên TikTok', link: 'https://www.tiktok.com/tiktok-rewards/vi-VN' },
            { title: 'TikTok Embeds', link: 'https://www.tiktok.com/embed' },
        ],
    },
    {
        title: 'Điều khoản và chính sách',
        textLink: [
            { title: 'Trợ giúp', link: 'https://support.tiktok.com/vi' },
            {
                title: 'An toàn',
                link: 'https://www.tiktok.com/safety/vi-vn/',
            },
            {
                title: 'Điều khoản',
                link: 'https://www.tiktok.com/legal/page/row/terms-of-service/vi',
            },
            { title: 'Chính sách Quyền riêng tư', link: 'https://www.tiktok.com/legal/page/row/privacy-policy/vi' },
            { title: 'Trung tâm quyền riêng tư', link: 'https://www.tiktok.com/privacy/overview/vi' },
            { title: 'Cổng thông tin Tác giả', link: 'https://www.tiktok.com/creator-academy/en/homepage' },
            { title: 'Hướng dẫn Cộng đồng', link: 'https://www.tiktok.com/community-guidelines/vi-vn/' },
        ],
    },
];

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <Effect />
            <FooterItem items={FOOTER_ITEM} />
            <div>
                <Tippy
                    interactive
                    // visible
                    placement="top"
                    offset={[80, 107]}
                    render={(props) => (
                        <div className={cx('rule')} tabIndex="-1" {...props}>
                            <PopperWrapper className={cx('rule-wrapper')}>
                                <a
                                    className={cx('title')}
                                    href="https://www.tiktok.com/legal/page/global/law-enforcement/vi"
                                    target="_blank"
                                >
                                    NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                                </a>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <span className={cx('more-btn')}>Thêm</span>
                </Tippy>
            </div>
            <span className={cx('year')}>© 2024 TikTok</span>
        </div>
    );
}

export default Footer;
