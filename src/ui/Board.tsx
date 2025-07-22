type Props = {
  guesses: string[];
  currentGuess: string;
};

const NUM_ROWS = 6;
const WORD_LENGTH = 5;

export default function Board({ guesses, currentGuess }: Props) {
  return <div className="flex flex-col gap-1">{currentGuess}</div>;
}
