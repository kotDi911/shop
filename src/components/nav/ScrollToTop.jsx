import {useEffect, useState} from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => setIsVisible(window.scrollY > 500);
    const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            style={{
                all: 'unset',
                fontSize: '1.5rem',
                position: 'fixed',
                right: '4%',
                bottom: '4rem',
                cursor: 'pointer',
                transform: 'scale(1.8)',
                opacity: isVisible ? 1 : 0,
                transition: '0.3s',
            }}
            onClick={scrollToTop}
        >
            🔝
        </button>
    );
}
export default ScrollToTop