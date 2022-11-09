import { FC } from 'react';

import './Button.scss';
export const Button: FC<{ text: string }> = ({ text }) => {
	return (
		<>
			<button>{text}</button>
		</>
	);
};
