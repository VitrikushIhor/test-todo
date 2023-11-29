import {FC} from 'react';
import styles from './styles.module.scss';
import {Check} from '../Check';
import {MdDelete, MdEdit} from 'react-icons/md';
import {Link} from 'react-router-dom';
import {TodoService} from '../../services/todo-service';

export interface ITodoItem {
	checked: boolean
	title: string
	id:number
}

export const TodoItem: FC<ITodoItem> = ({title,checked,id}) => {

	const handleDeleteTodo = async () => {
		await TodoService.removeTodo({id});
	};

	return (
			 <li className={styles.todoItem}>
				 <Check isChecked={checked}/>
				 <span>{title}</span>
				 <div className={styles.todoItem__actions}>
					 <Link to={`/edit/${id}`}><MdEdit size={24}/></Link>
					 <MdDelete size={24} onClick={handleDeleteTodo}/>
				 </div>
		 </li>
	);
};

