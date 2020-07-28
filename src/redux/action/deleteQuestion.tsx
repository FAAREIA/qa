import {DELETE_QUESTION} from './types';

const deleteQuestion = id => ({
	payload: id,
	type: DELETE_QUESTION
});

export default deleteQuestion;