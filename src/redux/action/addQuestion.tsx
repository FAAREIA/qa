import {ADD_QUESTION} from './types';

const addQuestion = question => ({
	payload: question,
	type: ADD_QUESTION
});

export default addQuestion;