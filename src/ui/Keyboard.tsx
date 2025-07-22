const keyboardLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type KeyboardProps = {
  guessedLetters: string[];
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
  guessedLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4 xl:w-3/5">
      {keyboardLetters.map((letter: string) => (
        <button
          key={letter}
          disabled={guessedLetters.includes(letter)}
          className={`rounded border px-4 py-2 transition-all duration-200 ease-in-out ${
            guessedLetters.includes(letter)
              ? "bg-green-300 text-white hover:bg-green-300"
              : "bg-none hover:cursor-pointer hover:bg-green-500"
          }`}
          id={letter}
          onClick={() => addGuessedLetter(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
