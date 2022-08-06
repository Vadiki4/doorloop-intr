import { FunctionComponent } from 'react';
import Timer from '../timer';
import { HeaderProps } from './types';

const Header: FunctionComponent<HeaderProps> = ({
	wordScore,
	mistakesCount,
	wordsPerMinute,
	endGame,
	gameActive,
}) => {
	return (
		<div className='header'>
			<span>Correct Words: {wordScore}</span>
			<span>Mistakes: {mistakesCount}</span>
			<span>Words Per Minute: {wordsPerMinute}</span>
			<Timer endGame={endGame} gameActive={gameActive} />
		</div>
	);
};

export default Header;
