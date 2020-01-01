import React, {useState, useEffect, Fragment} from 'react';
import './Play.css';
import Loader from '../loader/Loader';
import Modal from '../modal/Modal';

const Play = ({user, setUser}) => {
    
    // Word entered by user
    const [word, setWord] = useState('');

    // Check if server has finished picking a word for user to play and display a message if it did not
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');

    // Check if server has finished validating word entered by user and display a message if it is invalid
    const [isWordLoading, setIsWordLoading] = useState(false);
    const [wordMessage, setWordMessage] = useState('');

    const [guessesRemaining, setGuessesRemaining] = useState(15);

    // List of words that user has entered so far
    const [words, setWords] = useState([]);

    // Flag to ensure new word is loaded if user does not win the current game
    const [flag, setFlag] = useState(false);

    // Load new word every time there's a change in flag or user (more specifically, user.points)
    useEffect(() => {
        setGuessesRemaining(15);

        fetch(`http://localhost:8080/play/${user.id}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            data !== 'success' && setMessage(data);
        });
    }, [user, flag]);

    // Update points if user wins
    const updatePoints = () => {
        fetch('http://localhost:8080/points', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: user.id, word})
        })
        .then(response => response.json())
        .then(data => {
            if (isNaN(data)) {
                setMessage(data);
            } else {
                setMessage('Good one! You get a point. Keep playing!');
                setUser({
                    ...user,
                    points: Number(data)
                });
                localStorage.setItem('user', JSON.stringify({
                    ...user,
                    points: Number(data)
                }));
            }
        });
    };

    // Display number of bulls and bears in word entered by user
    const displayBullsAndBears = data => {
        if (typeof data === 'object') {

            // Decrement number of guesses for every valid word entered by user
            setGuessesRemaining(guessesRemaining - 1);

            // End game if user wins or has no guesses left, otherwise add word to list of already entered words
            if (data.bulls === 5) {
                setWords([]);
                updatePoints();
            } else {
                if (words.length === 14) {
                    setWords([]);
                    setMessage('Uh-oh. Better luck next time. Keep playing!');
                    setFlag(!flag);
                } else {
                    const {bulls, bears} = data;
                    setWords([
                        <fieldset key={words.length}>
                            <input type='text' readOnly value={word} className='user-word' />
                            <span className='count'>
                                - {bulls} {bulls === 1 ? 'bull' : 'bulls'}, {bears} {bears === 1 ? 'bear' : 'bears'}
                            </span>
                        </fieldset>,
                        ...words,
                    ]);
                }
            }
        } else {    
            setWordMessage(data);
        }
    };

    // Store word entered by user
    const handleChange = event => {
        setWord(event.target.value.toUpperCase());
    };

    // Validate word entered by user
    const handleSubmit = event => {
        event.preventDefault();
        setIsWordLoading(true);

        fetch('http://localhost:8080/check', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: user.id, word})
        })
        .then(response => response.json())
        .then(data => {
            setIsWordLoading(false);
            displayBullsAndBears(data);
            setWord('');
        });
    };

    return (
        <main className='flex'>
            
            <p className='player-info'>
                Player: {user.username} | Points: {user.points}<br/>
                <span className='word-note'>Note: I'll think of a different word every time you play.</span>
            </p>

            {
                isLoading ?
                <Loader/>
                :
                message ?
                <Modal message={message} setMessage={setMessage} />
                :
                <Fragment>
                    <form className='play-form' onSubmit={handleSubmit}>
                        <input type='text' minLength='5' maxLength='5' className='word' value={word}
                            onChange={handleChange} autoComplete='off' autoFocus spellCheck={false} required />
                        <input type='submit' value='Check' className='submit-word' />
                    </form>
                    <span className='guess-count'>Guesses remaining: {guessesRemaining}</span>
                </Fragment>
            }

            {
                wordMessage &&
                <Modal message={wordMessage} setMessage={setWordMessage} />
            }
            {
                words.length > 0 &&
                <form className='user-guess'>
                        {words}
                </form>
            }
            {
                isWordLoading &&
                <Loader/>
            }
        </main>
    );
};

export default Play;