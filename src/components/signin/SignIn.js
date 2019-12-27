import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './SignIn.css';

const SignIn = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const {pathname} = props.location;

    const handleInput = (event) => {
        const value = event.target.value.trim();
        event.target.id === 'name' ? setName(value) : setPassword(value);
    };

    return (
        <main className='flex'>
            <h1>{pathname === '/signin' ? 'Sign In' : 'Register'}</h1>

            <form>
                <fieldset>
                    <div>
                        <label htmlFor='name'>Username</label><br/>
                        <input onChange={handleInput} value={name} id='name' type='text' placeholder='Username' autoComplete='off' autoFocus required />
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
        </main>
    );
};

export default SignIn;