import React, {useEffect, useReducer} from 'react';
import Answer from './Answer';
import EditForm from './EditForm';

const initialAnswer = {
	checked: false,
	removed: false,
	value: ''
};

const initialState = {
	answers: [],
	question: null,
}

const isWritten = string => string.match(/[0-9a-z]/gi);

let timeoutInput;

const reducer = (state, action) => {
	const answers = state.answers.map(e => Object.assign({}, e));
	const payload = action.payload;
	const type = action.type;

	switch(type) {
		case 'ADD_ANSWER':
			const shownAnswers = answers.filter(e => e.removed === false);
			const lastShownAnswer = shownAnswers[shownAnswers.length - 1];

			if (lastShownAnswer === undefined || isWritten(lastShownAnswer.value)) answers.push(initialAnswer);

			return {...state, answers};
		case 'ADD_INITIAL':
			return {answers: payload.answers, question: payload.question};
		case 'REMOVE_ANSWER':
			answers[payload].removed = true;
			return {...state, answers};
		case 'UPDATE_ANSWER':
			answers[payload.index].value = payload.value.replace(/ +/g, ' ');
			return {...state, answers};
		case 'UPDATE_CHECKBOX':
			answers[payload.index].checked = payload.checked;
			return {...state, answers};
		case 'UPDATE_QUESTION':
			return {answers, question: payload};
		default:
			return state;
	}
}

const Edit = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const {correct_answer: correctAnswer, id, incorrect_answer: incorrectAnswer, question} = props.question;

	const addAnswer = () => dispatch({type: 'ADD_ANSWER'});

	const addInitialAnswers = payload => dispatch({payload, type: 'ADD_INITIAL'});

	const createAnswer = () => {
		const items = [];

		for (let i = 0; i < state.answers.length; i++) {
			const answer = state.answers[i];
			const removed = answer.removed;

			if (removed) continue;
			items.push(<Answer checked={answer.checked} index={i} key={i} removeAnswer={removeAnswer} text={answer.value} updateCheckbox={updateCheckbox} updateText={updateText} />);
		}

		return items;
	}

	const removeAnswer = index => dispatch({payload: index, type: 'REMOVE_ANSWER'});

	const updateCheckbox = (e, index) => {
		const checked = e.currentTarget.checked;

		return dispatch({payload: {checked, index}, type: 'UPDATE_CHECKBOX'});
	};

	const updatedQuestionObject = () => {
		const newCorrectAnswers = state.answers.filter(e => e.checked && !e.removed).map(e => e.value);
		const newIncorrectAnswers = state.answers.filter(e => !e.checked && !e.removed).map(e => e.value);
		const question = props.question;

		const updatedQuestion = {
			category: question.category,
			correct_answer: newCorrectAnswers,
			difficulty: question.difficulty,
			id: question.id,
			incorrect_answer: newIncorrectAnswers,
			question: state.question
		}

		return updatedQuestion;
	}

	const updateText = (e, type, index) => {
		const value = e.currentTarget.value;
		const payload = (type === 'UPDATE_ANSWER') ? {index, value} : value;

		clearTimeout(timeoutInput);
		timeoutInput = setTimeout(() => dispatch({payload, type}), 300);
	};

	useEffect(() => {
		const initialCorrectAnswers = correctAnswer.map(e => ({...initialAnswer, checked: true, value: e}));
		const initialIncorrectAnswers = incorrectAnswer.map(e => ({...initialAnswer, value: e}));

		const answers = initialCorrectAnswers.concat(initialIncorrectAnswers);

		addInitialAnswers({answers, question});

		document.body.classList.add('no-scroll');

		return () => document.body.classList.remove('no-scroll');
	}, [id]);

	return (
		<section className="edit-question" id="modal">
			<EditForm methods={{addAnswer, createAnswer, removeAnswer, updateText, updatedQuestionObject}} question={question} />
		</section>
	);
}

export default Edit;