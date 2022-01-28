import { nanoid } from 'nanoid';
import { Component } from 'react';
import { TiTrash } from 'react-icons/ti';
import './App.css';

class App extends Component {
	state = {
		item: {
			todo: ''
		},
		items: []
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			item: {
				[name]: value,
				id: nanoid()
			}
		});
	};
	handleAdd = () => {
		if (this.state.item.todo.length > 0) {
			let item = this.state.item;
			let items = this.state.items;
			items.push(item);
			this.setState({
				items
			});
		}
	};
	handleDelete = (id) => {
		let items = this.state.items.filter((item) => {
			return item.id !== id;
		});
		this.setState({
			items: items
		});
	};
	render() {
		return (
			<>
				<header>
					<h1>Todo List</h1>
					<input
						onChange={this.handleChange}
						type="text"
						name="todo"
						value={this.state.item.todo}
						placeholder="Things to be done..."
					/>
					<span className="addBtn" onClick={this.handleAdd}>
						Add
					</span>
				</header>
				<ul>
					{this.state.items.length > 0 &&
						this.state.items.map(({ todo, id }) => (
							<li key={id}>
								<span>{todo}</span>
								<TiTrash
									className="trashIcon"
									onClick={() => this.handleDelete(id)}
								></TiTrash>
							</li>
						))}
				</ul>
			</>
		);
	}
}

export default App;
