import { CompanyIcon, LocationIcon, BlogIcon, TwitterIcon } from '../../utils';

import { InfoItem, InfoItemProps } from '../InfoItem';
import { LocalGithubUser } from 'types';
import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {}

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
	const items: InfoItemProps[] = [
		{
			icon: <LocationIcon />,
			text: location,
		},
		{
			icon: <BlogIcon />,
			text: blog,
			isLink: true,
		},
		{
			icon: <TwitterIcon />,
			text: twitter,
		},
		{
			icon: <CompanyIcon />,
			text: company,
		},
	];

	return (
		<div className={styles.userInfo}>
			{items.map((item, index) => (
				<InfoItem {...item} key={index} />
			))}
		</div>
	);
};
