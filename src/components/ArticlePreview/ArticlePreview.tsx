import { DetailedHTMLProps, HTMLAttributes } from 'react';

import cn from 'classnames';
import styled from './ArticlePreview.module.css';

interface ArticlePreviewProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ArticlePreview = ({ className, ...props }: ArticlePreviewProps) => {
	return (
		<div className={cn(styled['article-preview'], className)} {...props}>
			<h2>Some title...</h2>
			<div>
				<span>data create ...</span>
				<span>title article text ...</span>
			</div>
		</div>
	);
};
