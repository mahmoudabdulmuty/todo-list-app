import { nanoid } from 'nanoid';
import { Component } from 'react';
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
	handleSubmit = () => {
		let item = this.state.item;
		let items = this.state.items;
		items.push(item);
		this.setState({
			items
		});
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
			<div className="App">
				<input
					onChange={this.handleChange}
					type="text"
					name="todo"
					value={this.state.item.todo}
				/>
				<button onClick={this.handleSubmit}>Submit</button>
				{this.state.items.map(({ todo, id }) => (
					<div key={id}>
						<span>{todo}</span>
						<button onClick={() => this.handleDelete(id)}>delete</button>
					</div>
				))}
			</div>
		);
	}
}

export default App;
