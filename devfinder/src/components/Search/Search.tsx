import { FC } from 'react';
import { Button } from '../Button';
import { SearchIcon } from '../../utils';

import styles from './Search.module.scss';

type FormFields = {
	username: HTMLInputElement;
};

interface SearchProps {
	hasError: boolean;
	onSubmit: (text: string) => void;
}

export const Search: FC<SearchProps> = ({ hasError, onSubmit }) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
		event.preventDefault();
		const text = event.currentTarget.username.value;

		if (text.trim()) {
			onSubmit(text);
			event.currentTarget.reset();
		}
	};

	return (
		<form onSubmit={handleSubmit} autoComplete='off'>
			<div className={styles.search}>
				<label htmlFor='search' className={styles.label}>
					<SearchIcon />
				</label>
				<input
					type='text'
					name='username'
					id='search'
					className={styles.textField}
					placeholder='Search Github username...'
				/>
				{hasError && <div className={styles.error}>No result</div>}
				<Button>Search</Button>
			</div>
		</form>
	);
};
