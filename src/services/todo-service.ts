import axios from 'axios';
import {IItem} from '../types/types';

const AppUrl= "https://jsonplaceholder.typicode.com"

export const TodoService = {

	async getAllTodo() {
		const url = `${AppUrl}/todos`;
		try {
			const {data} = await axios.get<IItem[]>(url)
			return data;
		} catch (error:any) {
			console.log(error.message);
		}
	},

	async createTodo({newTodo}:{newTodo:any}) {
		const url = `${AppUrl}/todos`;
		try {
			const {data} = await axios.post(url,{
				newTodo
			})
			return data;
		} catch (error:any) {
			console.log(error.message);
		}
	},
	async removeTodo({id}:{id:number}) {
		const url = `${AppUrl}/todos/${id}`;
		try {
			const {data} = await axios.delete(url)
			return data;
		} catch (error:any) {
			console.log(error.message);
		}
	},

	async updateTodo({title,completed,id}:{title:string,completed:boolean,id:string}) {
		const url = `${AppUrl}/todos/${id}`;
		try {
			const {data} = await axios.put(url,{title,completed})
			return data;
		} catch (error:any) {
			console.log(error.message);
		}
	},

};
