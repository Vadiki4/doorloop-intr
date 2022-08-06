import { FunctionComponent } from 'react';
import { ButtonElement } from './styles';
import { ButtonProps } from './types';

const Button: FunctionComponent<ButtonProps> = ({ onClick, label }) => {
	return (
		<ButtonElement className="button-element">
			<button onClick={onClick}>{label}</button>
		</ButtonElement>
	);
};

export default Button;
