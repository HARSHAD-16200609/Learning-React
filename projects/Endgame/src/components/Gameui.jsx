import { useState, useEffect } from "react"
import clsx from "clsx"


const letters = [

    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
]
const words = [
    "apple",
    "bridge",
    "cloud",
    "dragon",
    "engine",
    "forest",
    "galaxy",
    "harbor",
    "island",
    "jungle",
    "kernel",
    "ladder",
    "mountain",
    "nebula",
    "ocean",
    "planet",
    "quantum",
    "river",
    "signal",
    "tunnel",
    "universe",
    "valley",
    "window",
    "xenon",
    "yonder",
    "zenith"
]

const languages = [
    "Javascript",
    "Typescript",
    "React",
    "HTML",
    "CSS",
    "Python",
    "NodeJs",
    "Ruby",
    "Assembly"
]


function Gameui() {
    const mysteryWord = words[Math.floor(Math.random() * words.length)]
    const [attempts, setAttempts] = useState(0)

    const [Currentword, setCurrentword] = useState([])
    const [Guess, setGuess] = useState([])
    console.log(Guess)


    useEffect(() => {
        setCurrentword(mysteryWord.split(""))
    }, [])
    useEffect(() => {
        setAttempts(0)

    }, [Currentword])

    const isGameWON = Currentword.every((letter) => Guess.includes(letter.toUpperCase()))
    const isGameLost = attempts >= 8 && !isGameWON

    const handleGuess = (newGuess) => {
        if (attempts < 8 && !isGameWON) {
            // If already guessed, do nothing
            if (Guess.includes(newGuess)) {
                return
            }

            // Add the new guess
            setGuess((prevGuess) => [...prevGuess, newGuess])

            // If the guess is wrong (not in the word), increment attempts
            // Currentword contains lowercase, newGuess is Uppercase
            if (!Currentword.includes(newGuess.toLowerCase())) {
                setAttempts((prevAttempts) => prevAttempts + 1)
            }
        }
    }

    const keyboard = letters.map((letter) => {
        const isGuessed = Guess.includes(letter)
        const isCorrect = isGuessed && Currentword.includes(letter.toLowerCase())
        const isWronged = isGuessed && !isCorrect

        return (
            <button
                className={clsx("alphabet", {
                    "correct": isCorrect,
                    "wrong": isWronged
                })}
                key={letter}
                onClick={() => handleGuess(letter)}
            >
                {letter}
            </button>
        )
    })



    return (
        <div className="main-cont">
            <h1>Assembly: Endgame</h1>
            <h3>Guess the ward in under 8 attempts to :keep the</h3>
            <h3>programming world safe from Assembly!!</h3>
            {isGameWON && <div className="greeting2">
                <h1>You Win!!</h1>
                <h2>Well done 🎉!!</h2>
            </div>}
            {isGameLost && <div className="greeting1">
                <h1>Game over!!</h1>
                <h2>You lose!! Better start learning Assembly 🤬</h2>
            </div>}
            <div className="lang-cont">
                {languages.map((language, index) => {
                    const isLost = index < attempts
                    return (
                        <span
                            key={index}
                            className={clsx(language, { lost: isLost })}
                        >
                            {language}
                        </span>
                    )
                })}
                <div className="span-cont">
                    {Currentword.map((letter, index) => {
                        return <span key={index} >{(Guess.includes(letter.toUpperCase())) ? letter.toUpperCase() : ""}</span>
                    })}
                </div>
                <div className="alpha-cont">
                    {keyboard}
                </div>
            </div>
            <div className="new-game">
                <h1>New Game</h1>
            </div>
        </div>


    )
}

export default Gameui
