import {FC} from 'react';
import styles from './styles.module.scss';
import {FaCheck} from 'react-icons/fa6';

export interface ICheck {
	isChecked:boolean
}

export const Check: FC<ICheck> = ({isChecked}) => {
	return (
		 <div className={styles.check}>
			 {isChecked && <FaCheck  size={24}/>}
		 </div>
	);
};

