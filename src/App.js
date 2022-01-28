import { nanoid } from 'nanoid';
import { Component } from 'react';
import './App.css';
import Header from './components/Header/';
import ListItems from './components/ListItems/';

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
				<Header
					handleAdd={this.handleAdd}
					todo={this.state.item.todo}
					handleChange={this.handleChange}
				/>
				<ListItems items={this.state.items} handleDelete={this.handleDelete} />
			</>
		);
	}
}

export default App;
