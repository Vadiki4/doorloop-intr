export type HeaderProps = {
	wordScore: number;
	mistakesCount: number;
	wordsPerMinute: number;
	endGame: () => void;
	gameActive: boolean;
};
