import {useEffect, useRef, useState} from "react";
import useWindowSize from "./useWindowResize";

const useContainerSize = () => {
    const [width, setWidth] = useState<number>(0);

    const ref = useRef<HTMLDivElement>(null);

    const setContainerWidth = () => {
        const {clientWidth} = ref.current || {};
        if(!clientWidth) return;

        setWidth(clientWidth - 64)
    }

    useEffect(() => {
        void setContainerWidth();
    }, []);

    useWindowSize(setContainerWidth)

    return {
        ref,
        width
    }
}

export default useContainerSize;