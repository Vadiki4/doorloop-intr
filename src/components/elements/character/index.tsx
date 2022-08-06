import { FunctionComponent } from 'react';
import { CharProps } from './types';

// renders an array of characters to display a word
// styles every character by its status [0-untached, 1-valid, 2-wrong]
const Char: FunctionComponent<CharProps> = ({ wordArray }) => {
	return (
		<>
			{wordArray.map((wordChar, charIdx) => (
				<div className={`char-item rule-${wordChar[1]}`} key={wordChar[0] + charIdx}>
					{wordChar[0]}
				</div>
			))}
		</>
	);
};

export default Char;
