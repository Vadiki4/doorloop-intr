import { WordStatus } from '../config/constants';

// shuffle array contents
export const shuffleArray = (array: string[]): string[] => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array.slice(0, 50);
};

// generates indexed array of characters for every word
// every char has a corresponding status based on user input
export const shuffleWords = (wordsList: string[]): Array<Array<[string, number]>> => {
	const shuffeledList = shuffleArray(wordsList);

	return shuffeledList.reduce((result, word, idx) => {
		result[idx] = word.split('').map((char) => [char, WordStatus.UNTACHED]);

		return result;
	}, new Array(shuffeledList.length));
};

// counts word mistakes from user input
export const handleMistakes = (wordArray: Array<[string, number]>): number =>
	wordArray.reduce(
		(count, [, charStatus]) =>
			(count +=
				charStatus === WordStatus.FAILED || charStatus === WordStatus.UNTACHED ? 1 : 0),
		0
	);
