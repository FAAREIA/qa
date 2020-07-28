import {ADD_QUESTION, DELETE_QUESTION, EDIT_QUESTION_SAVE} from '../action/types';
import IQuestion from '../../ts/interface/Question';
import TQuestion from '../../ts/type/Question';
// import TQuestionAction from '../../ts/type/QuestionAction';

const initialState = [];

const createHash = string => {
	const length = string.length;
	let hash = 0;

	if (length === 0) return hash;

	for (let i = 0; i < length; i++) {
		const charCode = string.charCodeAt(i);
		hash = ((hash << 7) - hash) + charCode;
		hash = hash & hash;
	}

	return hash;
}

// Easy way to decode HTML
const decodeHTMLEntities = string => {
	const div = document.createElement('div');
	div.innerHTML = string;
	return div.textContent;
}

const question = (state = initialState, action): TQuestion => {
	const ids = state.map(e => e.id);
	const payload = action.payload;
	const questions = state.map(e => Object.assign({}, e));
	const type = action.type;

	switch(type) {
		case ADD_QUESTION:
			payload.forEach(e => {
				const id = createHash(e.question);
				const isRepeated = ids.includes(id);

				if (isRepeated === false) {
					const question: IQuestion = {
						category: e.category,
						correct_answer: (Array.isArray(e.correct_answer)) ? e.correct_answer : [e.correct_answer],
						difficulty: e.difficulty,
						id: id,
						incorrect_answer: (Array.isArray(e.incorrect_answers)) ? e.incorrect_answers : [e.incorrect_answers],
						question: decodeHTMLEntities(e.question)
					};

					questions.unshift(question);
				}
			})

			return questions;
		case DELETE_QUESTION:
			const deleteIndex = ids.findIndex(id => id === payload);

			questions.splice(deleteIndex, 1);
			return questions;
		case EDIT_QUESTION_SAVE:
			const saveIndex = ids.findIndex(id => id === payload.id);

			questions.splice(saveIndex, 1, payload);
			return questions;
		default:
			return state;
	}
}

export default question;