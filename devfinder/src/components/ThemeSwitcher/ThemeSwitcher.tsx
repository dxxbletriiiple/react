import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '../../utils';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
	const [isDark, setIsDark] = useState(false);
	const themeText = isDark ? 'Light' : 'Dark';

	const ThemeIcon = isDark ? SunIcon : MoonIcon;

	useEffect(() => {
		document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
	}, [isDark]);

	return (
		<div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
			<span>{themeText}</span>
			<span className={styles.icon}>
				<ThemeIcon />
			</span>
		</div>
	);
};
