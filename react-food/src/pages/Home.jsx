import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';

function Home() {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([]);

	const { pathname, search } = useLocation();
	const { navigate } = useNavigate();
	// console.log(replace);
	const handleSearch = (str) => {
		setFilteredCatalog(
			catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())),
		);
		/* replace({
			pathname,
			search: `?search=${str}`,
		}); */
		navigate(`?search=${str}`, { replace: true });
	};

	useEffect(() => {
		getAllCategories().then((data) => {
			setCatalog(data.categories);
			setFilteredCatalog(
				search
					? data.categories.filter((item) =>
							item.strCategory
								.toLowerCase()
								.includes(search.split('=')[1].toLowerCase()),
					  )
					: data.categories,
			);
		});
	}, [search]);

	return (
		<>
			<Search cb={handleSearch} />
			{!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
		</>
	);
}
export { Home };
