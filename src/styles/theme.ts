import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
	backgroundColor: '#f0efeb',
	textColor: '#353b48',
	accentColor: '#64a6bd',
	color: {
		gray: '#c6c6c6',
	},
};

export default theme;

export const flexCustom = (alignItems?: string, justifyContent?: string, flexDirection?: string) => `
	display: flex;
	flex-direction: ${flexDirection || 'initial'};
	align-items: ${alignItems || 'center'};
	justify-content: ${justifyContent || 'center'};
`;
