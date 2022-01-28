import React, { Component } from 'react';
import { TiTrash } from 'react-icons/ti';
import './item.css';

export class index extends Component {
	render() {
		const { handleDelete, items } = this.props;
		return (
			items.length > 0 &&
			items.map(({ todo, id }) => (
				<li key={id}>
					<span>{todo}</span>
					<TiTrash
						className="trashIcon"
						onClick={() => handleDelete(id)}
					></TiTrash>
				</li>
			))
		);
	}
}

export default index;
