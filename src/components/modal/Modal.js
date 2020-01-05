import React, {useState, useEffect} from 'react';
import './Modal.css';

// Component for displaying a popup modal with error/information messages

const Modal = ({message, setMessage, setWords, setGameCompleted}) => {

    // Display modal as a block element when the component is rendered
    const [display, setDisplay] = useState('block');

    // Close modal when (x) icon is clicked
    const closeModal = () => {
        setDisplay('none');
        setMessage('');

        // Empty out list of words entered by user on completion of game in Play component
        setWords && setWords([]);
        setGameCompleted && setGameCompleted(false);
    };

    useEffect(() => {    

        // Close modal when a click is made anywhere in the window outside the modal-content
        const clickClose = event => {
            event.target === document.getElementById('modal') && closeModal();
        };

        // Close modal when escape key is pressed
        const keyClose = event => {
            event.key === 'Escape' && closeModal();
        };

        window.addEventListener('click', clickClose);
        window.addEventListener('keydown', keyClose);

        return () => {
            window.removeEventListener('click', clickClose);
            window.removeEventListener('keydown', keyClose);
        };
    });

    return (
        // Credit: https://www.w3schools.com/howto/howto_css_modals.asp

        <div id='modal' style={{display}}>
            <div id='modal-content'>
                <p className='failure-message'>{message}</p>
                <span id='close' onClick={closeModal}>&times;</span>
            </div>
        </div>
    );
};

export default Modal;