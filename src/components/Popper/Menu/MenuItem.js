import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={cx('wrapper-item')}>
            <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
            {data.toggle && (
                <Button className={cx(toggle && 'dark')} rounded toggled onClick={() => setToggle(!toggle)}></Button>
            )}
        </div>
    );
}

export default MenuItem;
