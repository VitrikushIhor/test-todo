import {FC, ReactNode} from 'react';
import styles from './styles.module.scss';
import {Header} from '../Header';

export interface ILayout {
	children:ReactNode
}

export const Layout: FC<ILayout> = ({children}) => {
	return (
		 <div className={styles.container}>
			 <Header/>
			 {children}
		 </div>
	);
};

