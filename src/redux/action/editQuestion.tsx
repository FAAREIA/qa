import {EDIT_QUESTION} from './types';

const editQuestion = question => ({
	payload: question,
	type: EDIT_QUESTION
});

export default editQuestion;