import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { GAME_DEFAULT_TIME } from '../../../config/constants';
import { TimerProps } from './types';

// Timer component displaying time left for the game
// uses endGame callback to end the game
const Timer: FunctionComponent<TimerProps> = ({ endGame, gameActive }) => {
	const [gameTimer, setGameTimer] = useState(GAME_DEFAULT_TIME);
	const timerRef = useRef<number>();

	const startGame = () => {
		timerRef.current = window.setInterval(() => {
			setGameTimer((timer) => {
				if (timer > 0) {
					return timer - 1;
				} else {
					return 0;
				}
			});
		}, 1000);
	};

	useEffect(() => {
		if (gameActive) {
			setGameTimer(GAME_DEFAULT_TIME);
			startGame();
		}
	}, [gameActive]);

	useEffect(() => {
		if (gameTimer <= 0) {
			clearInterval(timerRef.current);
			endGame();
		}
	}, [gameTimer, endGame]);

	return <span>Time: {gameTimer}</span>;
};

export default Timer;
