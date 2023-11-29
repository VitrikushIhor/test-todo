import {FC, useEffect, useMemo, useState} from 'react';
import styles from './styles.module.scss';
import {TodoItem} from '../../components/TodoItem';
import Pagination from '../../components/Pagination';
import {Title} from '../../components/Title';
import {IItem} from '../../types/types';
import {TodoService} from '../../services/todo-service';

export interface IHomePage {
}
let PageSize = 10;

export const HomePage: FC<IHomePage> = () => {

	const [todos, setTodos] = useState<IItem[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	const currentTodosData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return todos.slice(firstPageIndex, lastPageIndex);
	}, [currentPage,todos]);


	useEffect(() => {
		const fetchTodos = async () => {
			const res = await TodoService.getAllTodo()
			if (res){
			setTodos(res);
			}
		};

		fetchTodos();
	}, []);

	return (
		 <div className={styles.container}>
			 <Title>Todo List</Title>
			 <ul>
				 {currentTodosData.map((todo) => (
					<TodoItem
						 id={todo.id}
						 key={todo.id}
						 checked={todo.completed}
						 title={todo.title}
					/>
				 ))}
			 </ul>
			 <Pagination
				  className="pagination-bar"
				  currentPage={currentPage}
				  totalCount={todos.length}
				  pageSize={PageSize}
				  onPageChange={page => setCurrentPage(page)}
			 />
		 </div>
	);
};

