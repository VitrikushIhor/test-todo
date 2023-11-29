import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {Title} from '../../components/Title';
import {Field} from '../../components/Field';
import {Button} from '../../components/Button';
import {TodoService} from '../../services/todo-service';

export interface ICreateTodoPage {
}

export const CreateTodoPage: FC<ICreateTodoPage> = () => {

	const [newTodo, setNewTodo] = useState({});

	const handleInputChange = (e:any) => {
		const { name, value } = e.target;
		setNewTodo({ ...newTodo, [name]: value });
	};

	const handleCreateTodo = async () => {
		const res = await TodoService.createTodo({newTodo});
		console.log(res)
	};

	return (
		 <div className={styles.createTodo}>
			 <Title>Create Todo</Title>
			 <form>
				<div>
					<span>Title:</span>
					<Field placeholder={"Create Todo"} onChange={handleInputChange}/>
				</div>
					<div>
						<label>Completed:
							<input type="checkbox" name="completed" onChange={event => setNewTodo({ ...newTodo, completed: event.target.checked })} />
						</label>
					</div>
				 <Button  onClick={handleCreateTodo}>Create Todo</Button>
			 </form>
		 </div>
	);
};

