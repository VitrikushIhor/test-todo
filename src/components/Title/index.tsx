import {FC, ReactNode} from 'react';
import styles from './styles.module.scss';

export interface ITitle {
	children:ReactNode
}

export const Title: FC<ITitle> = ({children}) => {
	return (
		 <h2 className={styles.title}>
			 {children}
		 </h2>
	);
};

