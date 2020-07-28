import React from 'react';
import {useDispatch} from 'react-redux';
import editQuestion from '../../redux/action/editQuestion';
import deleteQuestion from '../../redux/action/deleteQuestion';

import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';

const Question = props => {
	const {category, difficulty, id, question} = props.question;
	const dispatch = useDispatch();

	return (
		<>
			<article className="question">
				<h3 className="heading">{question}</h3>
				<dl className="resume">
					<dt className="hide">Category:</dt>
					<dd className="category">{category}</dd>
					<dt className="hide">Difficulty:</dt>
					<dd className="difficulty">{difficulty}</dd>
				</dl>
				<div className="action">
					<Fab color="primary" size="medium" onClick={() => dispatch(editQuestion(props.question))} aria-label="edit"><EditIcon /></Fab>
					<Fab color="secondary" size="medium" onClick={() => dispatch(deleteQuestion(id))} aria-label="delete"><DeleteIcon /></Fab>
				</div>
			</article>
			<Divider />
		</>
	);
}

export default Question;