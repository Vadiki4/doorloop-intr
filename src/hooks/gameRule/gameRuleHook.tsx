import { useState } from 'react';
import produce from 'immer';
import { handleMistakes, shuffleWords } from '../../utils/gameUtils';
import { WordStatus } from '../../config/constants';

// game hook - controls game logic
export const useGameRules = (wordsList: string[]) => {
	const [wordScore, setWordScore] = useState(0);
	const [mistakesCount, setMistakesCount] = useState(0);
	const [wordsPerMinute, setWordsPerMinute] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentInput, setCurrentInput] = useState('');
	const [gameActive, setGameActive] = useState(true);
	const [wordsProgress, setWordProgress] = useState(shuffleWords(wordsList));

	const handleScores = (): void => {
		let mistakes = handleMistakes(wordsProgress[currentIndex]);

		if (mistakes) {
			setMistakesCount(mistakesCount + mistakes);
		} else {
			setWordScore(wordScore + 1);
		}
	};

	const endGame = (): void => {
		setGameActive(false);
	};

	// moves to next word
	const handleSubmit = (): void => {
		handleScores();
		setCurrentIndex(currentIndex + 1);
		setCurrentInput('');
		setWordsPerMinute(wordsPerMinute + 1);
	};

	const resetGame = (): void => {
		setWordScore(0);
		setMistakesCount(0);
		setWordsPerMinute(0);
		setCurrentIndex(0);
		setCurrentInput('');
		setGameActive(true);
	};

	const restartGame = (): void => {
		resetGame();
		setWordProgress(shuffleWords(wordsList));
	};

	// handle user input
	const handleType = (value: string): void => {
		const inputLastIndex = value.length - 1;
		const inputLastChar = value.slice(-1);
		const currentGameWord = wordsProgress[currentIndex];
		const [currentGameChar] = currentGameWord?.[inputLastIndex] || [];

		if (inputLastChar === ' ') {
			handleSubmit();
		} else {
			setWordProgress(
				produce((draft: any) => {
					let char;
					let newStatus;

					if (value.length <= currentInput.length) {
						char = draft[currentIndex][inputLastIndex + 1];
						newStatus = WordStatus.UNTACHED;
					} else {
						char = draft[currentIndex][inputLastIndex];
						newStatus =
							inputLastChar === currentGameChar ? WordStatus.VALID : WordStatus.FAILED;
					}

					if (char && newStatus >= 0) {
						char[1] = newStatus;
					}
				})
			);

			setCurrentInput(value);
		}
	};

	return {
		wordScore,
		mistakesCount,
		endGame,
		gameActive,
		currentIndex,
		wordProgress: wordsProgress,
		wordsPerMinute,
		handleType,
		currentInput,
		restartGame,
	};
};
