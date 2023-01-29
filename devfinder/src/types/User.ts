export type LocalGithubUser = {
	login: string;
	id: number;
	avatar: string;
	name: string;
	company: string;
	blog: string;
	location: string;
	bio: string;
	twitter: string;
	repos: string;
	followers: string;
	following: string;
	created: string;
};

export type GithubUser = {
	login: string;
	id: number;
	avatar_url: string;
	name: string;
	company: string;
	blog: string;
	location: string;
	bio: string;
	twitter_username: string;
	public_repos: string;
	followers: string;
	following: string;
	created_at: string;
};

export type GithubError = {
	message: string;
	documentation_url: string;
};

/*{
	"login": "dxxbletriiiple",
	"id": 44002603,
	"node_id": "MDQ6VXNlcjQ0MDAyNjAz",
	"avatar_url": "https://avatars.githubusercontent.com/u/44002603?v=4",
	"gravatar_id": "",
	"url": "https://api.github.com/users/dxxbletriiiple",
	"html_url": "https://github.com/dxxbletriiiple",
	"followers_url": "https://api.github.com/users/dxxbletriiiple/followers",
	"following_url": "https://api.github.com/users/dxxbletriiiple/following{/other_user}",
	"gists_url": "https://api.github.com/users/dxxbletriiiple/gists{/gist_id}",
	"starred_url": "https://api.github.com/users/dxxbletriiiple/starred{/owner}{/repo}",
	"subscriptions_url": "https://api.github.com/users/dxxbletriiiple/subscriptions",
	"organizations_url": "https://api.github.com/users/dxxbletriiiple/orgs",
	"repos_url": "https://api.github.com/users/dxxbletriiiple/repos",
	"events_url": "https://api.github.com/users/dxxbletriiiple/events{/privacy}",
	"received_events_url": "https://api.github.com/users/dxxbletriiiple/received_events",
	"type": "User",
	"site_admin": false,
	"name": "dxxbletriiiple",
	"company": "Innopolis",
	"blog": "htttps://dxxbletriiiple.ru",
	"location": "Russia",
	"email": null,
	"hireable": null,
	"bio": "Frontend developer",
	"twitter_username": "dxxbletriiiple",
	"public_repos": 16,
	"public_gists": 0,
	"followers": 14,
	"following": 24,
	"created_at": "2018-10-09T17:55:08Z",
	"updated_at": "2023-01-27T00:18:59Z"
}*/
