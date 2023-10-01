import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import cn from 'classnames';
import styled from './Button.module.css';

interface ButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
}

export const Button = ({ className, children, ...props }: ButtonProps): JSX.Element => {
	return (
		<button className={cn(styled.button, className)} {...props}>
			{children}
		</button>
	);
};
