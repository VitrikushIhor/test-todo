import {FC} from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import {DataRoute} from '../../data/routes';

export interface IHeader {
}

export const Header: FC<IHeader> = () => {
	return (
		 <header className={styles.container}>
			 <Link to={DataRoute.Home}>Home Page</Link>
			 <Link to={DataRoute.CrateTodo}>Create Todo</Link>
		 </header>
	);
};

