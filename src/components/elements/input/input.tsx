import { ForwardRefRenderFunction, forwardRef } from 'react';
import { InputElement } from './styles';
import { InputProps } from './types';

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ value, onChange },
	ref
) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<InputElement>
			<input value={value} onChange={handleChange} ref={ref} />
		</InputElement>
	);
};

export default forwardRef(Input);
