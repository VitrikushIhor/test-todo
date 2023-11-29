import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Title} from '../../components/Title';
import {Field} from '../../components/Field';
import {Button} from '../../components/Button';
import styles from './styles.module.scss'
import {TodoService} from '../../services/todo-service';

export const EditTodoPage = () => {

	const {id}=useParams<{id:string}>()

	const [completed, setCompleted] = useState(false);
	const [title, setTitle] = useState("");

	const handleUpdateTodo = async () => {
		if (id){
		const res = await TodoService.updateTodo({id,completed,title})
		console.log('Updated Todo:', res);
		}
	};

	return (
		 <div className={styles.editTodo}>
			 <Title>Update Todo</Title>
				<div>
					<label>
						Completed:
						<input
							 type="checkbox"
							 checked={completed}
							 onChange={() => setCompleted(!completed)}
						/>
					</label>
				</div>
			 <div>
				 <label>
					 Title:
					 <Field
						  placeholder={"Update todo"}
						  onChange={(event) => setTitle(event.target.value)}
					 />
				 </label>
			 </div>
			 <Button onClick={handleUpdateTodo}>Update Todo</Button>
		 </div>
	);
};

