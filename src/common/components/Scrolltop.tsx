import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scrolltop: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100)
    }, [location]);

    return null;
}
export default Scrolltop;