import React from 'react';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

const Answer = props => {
	const {checked, index, removeAnswer, text, updateCheckbox, updateText} = props;

	return (
		<div className="form-group">
			<TextField id="outlined-basic" variant="outlined" defaultValue={text} name={text} onChange={e => updateText(e, 'UPDATE_ANSWER', index)} inputProps={{pattern: '^[0-9a-zA-Z].*'}} required />
			<FormControlLabel control={<Checkbox checked={checked} name={text} onChange={e => updateCheckbox(e, index)} color="primary" />} label="CORRECT"/>
			<Button variant="outlined" size="large" color="primary" onClick={() => removeAnswer(index)}>Remove</Button>
		</div>
	);
}

export default Answer;