import React, {useState} from 'react';
import './Home.css';
import Instruction from '../instruction/Instruction';
import instructions from './instructionsList';

const Home = (props) => {
    const [index, setIndex] = useState(0);
    const [completed, setCompleted] = useState(false);

    const paginate = (event) => {
        setCompleted(false);
        event.target.className === 'back' && setIndex(index - 1);
        event.target.className === 'continue' && setIndex(index + 1);
        event.target.className === 'play' && props.history.push('/register');
    };

    return (
        <main>            
            <Instruction instruction={instructions[index]} setCompleted={setCompleted} />

            {completed &&
                <nav role='navigation' className='instructions-nav'>
                    <ul className='pagination' onClick={paginate}>
                        {index > 0 &&
                            <li>
                                <button className='back'>Back</button>
                            </li>
                        }
                        {index < instructions.length &&
                            <li>
                                <button className={index === instructions.length - 1 ? 'play' : 'continue'}>
                                    Continue
                                </button>
                            </li>
                        }
                    </ul>
                </nav>
            }
        </main>
    );
};

export default Home;