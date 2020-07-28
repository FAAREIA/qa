import {ADD_QUESTION, REQUEST_FAILURE, REQUEST_QUESTIONS, REQUEST_SUCCESS} from './types';

const fetchQuestions = request => {
	return dispatch => {
		dispatch({type: REQUEST_QUESTIONS});

		return request()
			.then(response => {
				const code = response.status;

				if (code === 200) return response.json();
				throw new RangeError(code);
			})
			.then(json => {
				dispatch({type: REQUEST_SUCCESS});
				return dispatch({payload: json.results, type: ADD_QUESTION});
			})
			.catch(error => {
				return dispatch({error, type: REQUEST_FAILURE});
			});
	}
}

export default fetchQuestions;