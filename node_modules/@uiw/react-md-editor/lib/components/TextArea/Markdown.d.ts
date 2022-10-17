import React from 'react';
import { IProps } from '../../utils';
export interface MarkdownProps extends IProps, React.HTMLAttributes<HTMLPreElement> {
}
export default function Markdown(props: MarkdownProps): JSX.Element;
