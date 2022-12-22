import { useState, useCallback } from 'react';

export const useHttp = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const req = useCallback(
		async (
			url,
			method = 'GET',
			body = null,
			headers = { 'Content-Type': 'application/json' },
		) => {
			setLoading(true);

			try {
				const resp = await fetch(url, { method, body, headers });
				if (!resp.ok) throw new Error(`Could not fetch ${url}, status: ${resp.status}`);
				const data = await resp.json();
				setLoading(false);
				return data;
			} catch (error) {
				setLoading(false);
				setError(error.message);
			}
		},
		[],
	);

	const clearError = useCallback(() => {
		setError(null);
	}, []);

	return { loading, req, error, clearError };
};
