import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import Button from '@material-ui/core/Button';
import fetchQuestions from '../../redux/action/fetchQuestionsCreator';
import QuestionList from './QuestionList';
import useFetchRequest from '../hooks/useFetchRequest';


const Question = () => {
	const dispatch = useDispatch();
	const questions = useSelector(store => store.question);

	const createQuestions = () => {
		if (questions.length === 0) return;
		return questions.map(e => <QuestionList key={e.id} question={e} />);
	}

	const requests = {
		sports: useFetchRequest('https://opentdb.com/api.php', {amount: 10, category: 21, difficulty: 'medium', type: 'multiple'})
	}

	useEffect(() => {
		dispatch(fetchQuestions(requests.sports));
	}, []);

	const questionList = (questions) ? createQuestions() : null;

	return (
		<section id="questions">
			<h2>Questions</h2>
			{questionList}
			<Button className="load-more" size="large" color="primary" onClick={() => dispatch(fetchQuestions(requests.sports))} variant="contained">Load more questions</Button>
		</section>
	);
}

export default Question;