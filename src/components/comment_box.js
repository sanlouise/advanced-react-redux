import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

	constructor(props) {
		super(props);
		this.state = { comment: '' };
	}

	handleChange(event) {
		this.setState({ comment: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' })
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}
				className="comment-box">
				<h3>Write a comment</h3>
				<textarea value={this.state.comment} 
				onChange={this.handleChange.bind(this)} />
				<div>
					<button type="submit">Button</button>
				</div>
			</form>

		);
	}
}

// Bind all action creators to CommentBox class, enabled by importing all actions
export default connect(null, actions)(CommentBox);

