import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedVale, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line
    }, [value]);
    return debouncedVale;
}

export default useDebounce;
