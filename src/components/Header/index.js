import React, { Component } from 'react';
import './Header.css';

export class index extends Component {
	render() {
		const { handleChange, todo, handleAdd } = this.props;
		return (
			<header>
				<h1>Todo List</h1>
				<input
					onChange={handleChange}
					type="text"
					name="todo"
					value={todo}
					placeholder="Things to be done..."
				/>
				<span className="addBtn" onClick={handleAdd}>
					Add
				</span>
			</header>
		);
	}
}

export default index;
