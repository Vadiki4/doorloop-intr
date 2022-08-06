import { FunctionComponent } from 'react';
import Char from '../character';
import { WordProps } from './types';

// Renders every word and shows the current one
const WordWall: FunctionComponent<WordProps> = ({ wordProgress, currentIndex }) => {
	return (
		<>
			{wordProgress.map((wordArray: Array<[string, number]>, wordIdx: number) => (
				<div
					className={`word-item ${wordIdx === currentIndex ? 'active' : ''}`}
					key={wordIdx}
				>
					<Char wordArray={wordArray} />
				</div>
			))}
		</>
	);
};

export default WordWall;
