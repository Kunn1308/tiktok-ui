import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import * as searchServices from '~/services/searchService';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { SearchIcon, LoadingIcon, ClearIcon } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Search() {
    const [searchvalue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchvalue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        const fecthApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };

        fecthApi();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!e.target.value.startsWith(' ')) {
            setSearchValue(searchValue);
            // if (e.target.value.endsWith('  ')) {
            //     setSearchValue(searchvalue.trim());
            // }
        }
    };

    return (
        /*Using a wrapper <div> tag around the reference element solves 
        this by creating a new parentNode context. */
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                            <Link to={config.routes.search}>
                                <p className={cx('search-footer')}>{`Xem tất cả kết quả dành cho "${searchvalue}"`}</p>
                            </Link>
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
                        onChange={handleChange}
                        spellCheck={false}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchvalue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <ClearIcon />
                        </button>
                    )}
                    {loading && <LoadingIcon className={cx('loading')} />}

                    <Link to={config.routes.search} className={cx('search-btn')}>
                        <SearchIcon />
                    </Link>
                    <div className={cx('border')}></div>
                </div>
            </HeadlessTippy>
        </div>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object,
};
export default Search;
