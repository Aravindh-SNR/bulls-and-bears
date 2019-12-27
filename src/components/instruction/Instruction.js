import React, {useEffect} from 'react';
import './Instruction.css';
import Typed from 'typed.js';

const Instruction = ({instruction, setCompleted}) => {
    useEffect(() => {
        const options = {
            strings: [instruction],
            typeSpeed: 40,
            showCursor: false,
            onComplete: () => {
                setCompleted(true);
            }
        };

        const myInterval = window.setInterval(() => {
            window.scrollTo(0, document.body.scrollHeight);
        }, 500);

        let height = 0;

        const stopScroll = () => {
            if (height > window.scrollY) {
                clearInterval(myInterval);
            }
            height = window.scrollY;
        };
        
        document.addEventListener('scroll', stopScroll);

        const typed = new Typed('.instruction', options);

        return () => {
            typed.destroy();
            clearInterval(myInterval);
            document.removeEventListener('scroll', stopScroll);
        };
    }, [instruction, setCompleted]);

    return (
        <div className='grid'>
            <div></div>

            <section className='instruction'></section>

            <div></div>
        </div>
    );
};

export default Instruction;