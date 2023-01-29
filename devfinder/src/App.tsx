import { useState } from 'react';
import { Container } from './components/Container';
import { TheHeader } from './components/TheHeader';
import { Search } from './components/Search';
import { UserCard } from './components/UserCard';
import { LocalGithubUser, GithubUser, GithubError } from 'types';
import { isGithubUser } from './utils/typeguards';
import { extractLocalUser } from './utils/exract-local-user';
import { defaultUser } from './mock';
import './App.scss';

const BASE_URL = 'https://api.github.com/users/';

function App() {
	const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

	const fetchUser = async (username: string) => {
		const url = BASE_URL + username;

		const res = await fetch(url);
		const user = (await res.json()) as GithubUser | GithubError;

		if (isGithubUser(user)) {
			setUser(extractLocalUser(user));
		} else {
			setUser(null);
		}
	};
	return (
		<Container>
			<TheHeader />
			<Search hasError={!user} onSubmit={fetchUser} />
			{user && <UserCard {...user} />}
		</Container>
	);
}

export default App;
