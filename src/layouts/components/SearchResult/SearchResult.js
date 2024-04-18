import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

function SearchResult({ data }) {
    // áp dụng cho việc list nhiều, tránh việc render lại list khi searchResult chưa thay đổi
    return (
        <>
            {data.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
        </>
    );
}

export default memo(SearchResult);
