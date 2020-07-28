import {EDIT_QUESTION_PREVIEW} from './types';

const editQuestionPreview = question => ({
	payload: question,
	type: EDIT_QUESTION_PREVIEW
});

export default editQuestionPreview;