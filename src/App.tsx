import { useEffect, useState } from "react";
import Keyboard from "./ui/Keyboard";
import words from "./wordList.json";
import Board from "./ui/Board";

function App() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wordToGuess, setWordToGuess] = useState<string>("");

  // handle certain key selection
  const addGuessedLetter = (letter: string) => {
    setGuessedLetters((prevGuessed) => [...prevGuessed, letter.toUpperCase()]);
  };

  // checking difficulty with every run
  useEffect(() => {
    const wordsList = words.words;
    setWordToGuess(wordsList[Math.floor(Math.random() * wordsList.length)]);
  }, []);

  return (
    <main className="w-full h-full flex flex-col items-center gap-y-12 p-8 xl:p-20">
      <h1 className="text-6xl text-green-500 font-bold">FiveGuess</h1>
      <Board guesses={guessedLetters} currentGuess={wordToGuess} />
      <Keyboard
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </main>
  );
}

export default App;
