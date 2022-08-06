import './Game.css';

import { GameLayout } from './components/layouts/gameLayout';
import Input from './components/elements/input/input';
import { useGameRules } from './hooks/gameRule/gameRuleHook';
import { wordsList } from './config/wordsList';
import Button from './components/elements/button';
import WordWall from './components/elements/wordWall';
import Header from './components/elements/header';
import { useEffect, useRef } from 'react';

function Game() {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const {
		wordScore,
		mistakesCount,
		wordProgress,
		currentIndex,
		endGame,
		gameActive,
		handleType,
		currentInput,
		wordsPerMinute,
		restartGame,
	} = useGameRules(wordsList);

	useEffect(() => {
		if (gameActive) {
			inputRef.current?.focus();
		}
	}, [gameActive]);

	return (
		<GameLayout>
			<Header
				wordScore={wordScore}
				mistakesCount={mistakesCount}
				wordsPerMinute={wordsPerMinute}
				endGame={endGame}
				gameActive={gameActive}
			/>
			<div className='game-content'>
				<h2>Type as many words as you can within 1 minute!</h2>
				<div className='game-content-word'>
					<WordWall wordProgress={wordProgress} currentIndex={currentIndex} />
				</div>
				<div className='game-content-type'>
					{gameActive ? (
						<Input ref={inputRef} value={currentInput} onChange={handleType} />
					) : (
						<div className='game-over'>
							<span>Game Over!</span>
							<Button onClick={restartGame} label='Restart' />
						</div>
					)}
				</div>
			</div>
		</GameLayout>
	);
}

export default Game;
