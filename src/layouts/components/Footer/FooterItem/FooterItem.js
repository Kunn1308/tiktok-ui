/* eslint-disable react/jsx-no-target-blank */
import classNames from 'classnames/bind';
import styles from './FooterItem.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function FooterItem({ items = [] }) {
    const renderTextLinks = (textLink) =>
        textLink.map((text, index) => (
            <a key={index} className={cx('text')} href={text.link} target="_blank">
                {text.title}
            </a>
        ));

    return items.map((item, index) => (
        <Fragment key={index}>
            <h4 className={cx('title')}>{item.title}</h4>
            <div className={cx('text-list')}> {renderTextLinks(item.textLink)}</div>
        </Fragment>
    ));
}

export default FooterItem;
