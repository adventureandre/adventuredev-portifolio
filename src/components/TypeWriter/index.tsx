import {useEffect, useState} from 'react';

interface TypewriterProps {
    text: string;
    delay: number;
    className?: string;
    element: "h1" | "span"
}

const Typewriter = ({text, delay, className, element}: TypewriterProps) => {
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


    if (element === "h1") {
        return (
            <h1 className={className}>
                {displayText}
            </h1>
        );
    } else {
        return (
            <span className={className}>
            {displayText}
        </span>
        );
    }


};

export default Typewriter;
