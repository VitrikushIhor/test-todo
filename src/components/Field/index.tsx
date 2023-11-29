import {ChangeEvent, FC} from 'react';
import styles from './styles.module.scss';

export interface IField {
	placeholder: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Field: FC<IField> = ({ placeholder, onChange }) => {
	return (
		 <input
				className={styles.input}
				type="text"
				placeholder={placeholder}
				onChange={onChange}
		 />
	);
};
