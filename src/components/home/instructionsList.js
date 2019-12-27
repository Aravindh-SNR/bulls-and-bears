const instructions = [
    `<p>
        Hey there! ^1000 Let's play a word game. ^1000 I'll think of a five-letter word that exists in the English dictionary ^500 and your task is to find the word out. ^1000 But how?
    </p>`, 

    `<p>You say a random five-letter English word out loud and I'll tell you:</p>
    <ol>
        <li>
            The number of letters that occur in both the words ^500 at the same positions, ^500 a.k.a. number of bulls
        </li>
        <li>
            The number of letters that occur in both the words ^500 at different positions, ^500 a.k.a. number of bears
        </li>
    </ol>
    <p>
        Let me show you an example.
    </p>`, 

    `<p>Let's imagine I think of the word 'WATCH' and you say the following words. ^500 Focus on the number of bulls and bears to understand the game.</p>
    <ul id='examples'>
        <li>
            'LEMON' ^1000 - 0 bulls, 0 bears
        </li>
        <li>
            'CRIME' ^1000 - 0 bulls, 1 bear
        </li>
        <li>
            'COCKY' ^1000 - 0 bulls, 2 bears ^500 (because there are two C's although 'WATCH' has only one)
        </li>
        <li>
            'CLICK' ^1000 - 1 bull, 1 bear ^500 (Note here that the first C is a bear and the second is a bull although 'WATCH' has only one C)
        </li>
        <li>
            'TORCH' ^1000 - 2 bulls, 1 bear
        </li>
        <li>
            'CATCH' ^1000 - 4 bulls, 0 bears
        </li>
        <li>
            'WATCH' ^1000 - 5 bulls, 0 bears but I would simply tell you that you won!
        </li>
    </ul>`, 

    `<p>
        You are allowed ten guesses. ^1000 If the tenth word you say is not the one I have in my mind, ^500 you lose. ^1000 If you say the correct word on or before the tenth attempt, ^500 you win. ^1000 Check this <a href='#' target='_blank'>demo</a> if the instructions were not clear enough. ^1000 Ready to play?
    </p>`
];

export default instructions;