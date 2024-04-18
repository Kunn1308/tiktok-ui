import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const [toggle, setToggle] = useState(false);
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <div className={cx('wrapper-item')}>
            <Button className={classes} leftIcon={data.icon} to={data.to} href={data.href} onClick={onClick}>
                {data.title}
            </Button>
            {data.toggle && (
                <Button className={cx(toggle && 'dark')} rounded toggled onClick={() => setToggle(!toggle)}>
                    <span className={cx('icon-toggle')}></span>
                </Button>
            )}
        </div>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onclick: PropTypes.func,
};

export default MenuItem;
