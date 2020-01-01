import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './SignIn.css';
import Loader from '../loader/Loader';
import Modal from '../modal/Modal';

// Component to display sign-in/register forms and also perform the said actions

const SignIn = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const {pathname} = props.location;

    // Ensure fields are blank if user switches between sign-in and register forms
    useEffect(() => {
        setUsername('');
        setPassword('');
        setIsLoading(false);
    }, [pathname]);

    // Store username and password
    const handleInput = (event) => {
        const value = event.target.value.trim();
        event.target.id === 'username' ? setUsername(value) : setPassword(value);
    };

    // Register or sign in user
    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true);

        fetch(`https://arcane-fortress-76461.herokuapp.com${pathname}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })
        .then(response => {
            setIsLoading(false);
            return response.json();
        })
        .then(data => {
            if (data.id) {
                props.setUser(data);
                localStorage.setItem('user', JSON.stringify(data));
                props.history.push('/play');
            } else {
                setMessage(data);
            }
        })
    };

    return (
        <main className='flex'>
            <h1>{pathname === '/signin' ? 'Sign In' : 'Register'}</h1>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='username'>Username</label><br/>
                        <input onChange={handleInput} value={username} id='username' type='text' placeholder='Username' autoComplete='off' autoFocus required />
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label><br/>
                        <input onChange={handleInput} value={password} id='password' type='password' placeholder='Password' autoComplete='off' required />
                    </div>

                    <div>
                        <input id='submit-btn' type='submit' value={pathname === '/signin' ? 'Sign In' : 'Register'} />
                    </div>
                </fieldset>
            </form>

            {
                pathname === '/signin' ?
                <p>Don't have an account yet? <Link to='/register'>Register</Link></p> :
                <p>Have an account already? <Link to='/signin'>Sign In</Link></p>
            }

            { isLoading && <Loader/> }

            { message && <Modal message={message} setMessage={setMessage} /> }
        </main>
    );
};

export default SignIn;