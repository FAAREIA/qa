import React from 'react';
import {useDispatch} from 'react-redux';
import editQuestionCancel from '../../redux/action/editQuestionCancel';
import editQuestionSave from '../../redux/action/editQuestionSave';

import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

const EditForm = props => {
	const {addAnswer, createAnswer, updatedQuestionObject, updateText} = props.methods;
	const question = props.question;

	const answers = createAnswer();

	const dispatch = useDispatch();

	const submitForm = e => {
		e.preventDefault();
		return dispatch(editQuestionSave(updatedQuestionObject()));
	}

	return (
		<>
		<form onSubmit={submitForm}>
			<div className="question-input">
				<label className="hide">Question:</label>
				<TextField id="standard-basic" defaultValue={question} name="question" onChange={e => updateText(e, 'UPDATE_QUESTION')} inputProps={{pattern: '^[0-9a-zA-Z].*'}} required />
			</div>
			{answers}
			<div className="actions">
				<Button size="large" className="add-answer" color="primary" onClick={addAnswer} variant="contained">Add answer</Button>
				<Button type="submit" className="save" size="large" color="primary" variant="contained">Save</Button>
				<Button size="large" className="cancel" color="secondary" onClick={() => dispatch(editQuestionCancel())} variant="contained">Close</Button>
			</div>
			<Alert severity="info">No white spaces are valid at the beginning.</Alert>
		</form>
		<IconButton aria-label="close" className="close-modal" onClick={() => dispatch(editQuestionCancel())}><CloseIcon fontSize="large" /></IconButton>
		</>
	);
}

export default EditForm;