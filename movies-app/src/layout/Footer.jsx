export function Footer() {
	return (
		<footer className="page-footer grey darken-3">
			<div className="footer-copyright">
				<div className="container">
					© {new Date().getFullYear()} All rigts reserved
					<a
						className="grey-text text-lighten-4 right"
						href="https://github.com/dxxbletriiiple/react"
						target="_blank"
						rel="noreferrer"
					>
						Repo
					</a>
				</div>
			</div>
		</footer>
	);
}
