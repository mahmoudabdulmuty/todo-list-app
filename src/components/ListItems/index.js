import React, { Component } from 'react';
import Item from '../Item/';

export class ListItems extends Component {
	render() {
		const { handleDelete, items } = this.props;
		return <Item handleDelete={handleDelete} items={items} />;
	}
}

export default ListItems;
