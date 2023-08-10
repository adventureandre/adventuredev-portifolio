import {useEffect, useState} from 'react';

interface TypewriterProps {
    text: string;
    delay: number;
    className?: string;
}

const Typewriter = ({text, delay, className,}: TypewriterProps) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (text.length > index) {
                setDisplayText((t) => t + text.charAt(index));
                setIndex((i) => i + 1);
            }
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [index, text, delay]);

    return (
        <span className={className}>
            {displayText}
        </span>
    );
};

export default Typewriter;
