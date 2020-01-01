// List of 'how-to-play' instructions to be displayed on the landing page

const instructions = [
    `<p>
        Hey there! ^1000 Let's play a word game. ^1000 I'll think of a five-letter word that exists in the English dictionary ^500 and your task is to find the word out. ^1000 But how?
    </p>`, 

    `<p>
        You type in a random five-letter English word ^500 and I'll tell you the number of letters in your word ^500 that also occur in my word ^500 at:
    </p>
    <ol>
        <li>
            The same positions, ^500 a.k.a. number of bulls
        </li>
        <li>
            Different positions, ^500 a.k.a. number of bears
        </li>
    </ol>
    <p>
        Let me show you an example.
    </p>`, 

    `<p>
        Let's imagine I think of the word 'WATCH' ^500 and you enter one or more of the following words. ^500 Focus on the number of bulls and bears to understand the game.
    </p>
    <ul class='examples'>
        <li>
            'LEMON' ^1000 - 0 bulls, 0 bears
        </li>
        <li>
            'CRIME' ^1000 - 0 bulls, 1 bear
        </li>
        <li>
            'COCKY' ^1000 - 0 bulls, 2 bears ^500 (because there are two C's in 'COCKY' ^500 although 'WATCH' has only one)
        </li>
        <li>
            'CLICK' ^1000 - 1 bull, 1 bear ^500 (the first C in 'CLICK' is a bear and the second is a bull ^500 although 'WATCH' has only one C)
        </li>
        <li>
            'TORCH' ^1000 - 2 bulls, 1 bear
        </li>
        <li>
            'CATCH' ^1000 - 4 bulls, 1 bear
        </li>
        <li>
            'WATCH' ^1000 - 5 bulls, 0 bears ^500 but I would simply tell you that you won!
        </li>
    </ul>`,

    `<p>
        Another example just to show you some tricky situations. ^500 Suppose my word is 'AWARE' ^500 and some of your guesses are:
    </p>
    <ul class='examples'>
        <li>
            'CATCH' ^1000 - 0 bulls, 1 bear
        </li>
        <li>
            'ATTIC' ^1000 - 1 bull, 0 bears
        </li>
        <li>
            'BANAL' ^1000 - 0 bulls, 2 bears
        </li>
        <li>
            'AGAIN' ^1000 - 2 bulls, 0 bears
        </li>
    </ul>
    <p>
        Bottom line: ^500 Each letter in your word can only be counted once ^500 (either as a bull or bear depending on its position) ^500 although that letter might occur more than once in my word ^500 (look at the A's in this example).
    </p>`,

    `<p>
        You are allowed 15 guesses. ^1000 If the fifteenth word you enter is not the one I have in my mind, ^500 you lose. ^1000 If you enter the correct word on or before the fifteenth attempt, ^500 you win. ^1000 You earn a point for every word you find out. ^1000 Ready to play?
    </p>`
];

export default instructions;