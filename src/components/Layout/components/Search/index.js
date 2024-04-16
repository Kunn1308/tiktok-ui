import { useEffect, useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { SearchIcon, LoadingIcon, ClearIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchvalue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <p className={cx('search-footer')}>{`Xem tất cả kết quả dành cho "${searchvalue}"`}</p>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchvalue}
                    placeholder="Tìm kiếm"
                    onChange={(e) => setSearchValue(e.target.value)}
                    spellCheck={false}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchvalue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <ClearIcon />
                    </button>
                )}
                {/* <LoadingIcon className={cx('loading')} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
                <div className={cx('border')}></div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
