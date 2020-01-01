import React, {useState, useEffect} from 'react';
import './Leaderboard.css';
import Loader from '../loader/Loader';

// Component to display leaderboard of players

const Leaderboard = ({user}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [table, setTable] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('https://arcane-fortress-76461.herokuapp.com/leaderboard', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);

            if (typeof data === 'object') {
                let rank = 1, n;

                setTable(data.map((player, index) => {

                    // Increment rank only if the current player's points are lesser than the previous player
                    index && Number(player.points) < n && rank++;
                    n = Number(player.points);

                    return (
                        <tr className={user.username === player.username ? 'current-user' : ''} key={player.id}>
                            <td>{rank}</td>
                            <td>{player.username}</td>
                            <td>{player.points}</td>
                        </tr>
                    );
                }));
            } else {
                setMessage(data);
            }
        })
    }, [user]);

    return (
        <main className='flex'>
            <h1>Leaderboard</h1>

            { 
                isLoading ?
                <Loader/>
                :
                table ?
                <table className='pure-table pure-table-bordered'>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Points</th>
                        </tr>
                    </thead>

                    <tbody>{table}</tbody>
                </table>
                :
                <p>{message}</p>
            }
        </main>
    );
};

export default Leaderboard;