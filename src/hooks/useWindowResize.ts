import {useLayoutEffect} from "react";
import { useDebouncedCallback } from 'use-debounce';

const useWindowSize = (callBack: (results: number[]) => void) => {
    const handleResize = useDebouncedCallback(() => {
        callBack([window.innerWidth, window.innerHeight])
    }, 500)
    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
}

export default useWindowSize;