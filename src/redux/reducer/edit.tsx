import {EDIT_QUESTION, EDIT_QUESTION_CANCEL} from '../action/types';
import TQuestion from '../../ts/type/Question';
import TQuestionAction from '../../ts/type/QuestionAction';

const initialState = null;

const edit = (state: TQuestion = initialState, action: TQuestionAction): TQuestion => {
	const payload = action.payload;
	const type = action.type;

	switch(type) {
		case EDIT_QUESTION:
			return payload;
		case EDIT_QUESTION_CANCEL:
			return initialState;
		default:
			return state;
	}
}

export default edit;