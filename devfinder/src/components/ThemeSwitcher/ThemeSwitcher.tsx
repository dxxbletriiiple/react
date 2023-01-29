import { useState, useEffect } from 'react';
import Moon from '/assets/icon-moon.svg';
import Sun from 'assets/icon-sun.svg';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
	const [isDark, setIsDark] = useState(false);
	const themeText = isDark ? 'Light' : 'Dark';
	const ThemeIcon = isDark ? Sun : Moon;

	useEffect(() => {
		document.body.setAttribute('data-theme', isDark ? 'Dark' : 'Light');
	}, [isDark]);

	return (
		<div className={styles.themeSwitcher} onClick={() => setIsDark(!isDark)}>
			<span>{themeText}</span>
			<ThemeIcon className={styles['icon']} />
		</div>
	);
};
