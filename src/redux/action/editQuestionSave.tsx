import {EDIT_QUESTION_SAVE} from './types';

const editQuestionSave = question => ({
	payload: question,
	type: EDIT_QUESTION_SAVE
});

export default editQuestionSave;