import { DetailedHTMLProps, HTMLAttributes } from 'react';

import cn from 'classnames';
import styled from './Button.module.css';

interface ButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button = ({ className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button className={cn(styled.button, className)} {...props}>
			Button component
		</button>
	);
};
