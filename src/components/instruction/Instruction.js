import React, {useEffect} from 'react';
import './Instruction.css';
import Typed from 'typed.js';

// Component to display an instruction

const Instruction = ({instruction, setCompleted}) => {
    useEffect(() => {

        // Options for the Typed.js library
        const options = {
            strings: [instruction],
            typeSpeed: 45,
            showCursor: false,
            onComplete: () => {
                setCompleted(true);
            }
        };

        // Scroll window down automatically as window height increases
        const myInterval = window.setInterval(() => {
            window.scrollTo(0, document.body.scrollHeight);
        }, 500);

        let height = 0;

        // Stop automatic scrolling if user scrolls up
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