import {FC, MouseEventHandler, ReactNode} from 'react';
import styles from './styles.module.scss';

export interface IButton {
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<IButton> = ({ children, onClick }) => {
	return (
		 <button type="button" className={styles.button} onClick={onClick}>
			 {children}
		 </button>
	);
};
