import './AppInfo.scss';

export const AppInfo = ({ employeesCount, promoteCount }) => {
	return (
		<div className="app_info">
			<h1>Учет сотрудников в компании CRA:</h1>
			<h2>Общее число сотрудников: {employeesCount}</h2>
			<h2>Премию получат: {promoteCount}</h2>
		</div>
	);
};
