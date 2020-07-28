import {REQUEST_FAILURE, REQUEST_QUESTIONS, REQUEST_SUCCESS} from '../action/types';
import TLoading from '../../ts/type/Loading';
import TLoadingAction from '../../ts/type/LoadingAction';

const initialState = false;

const loading = (state: TLoading = initialState, action: TLoadingAction): TLoading => {
	const type = action.type;

	switch(type) {
		case REQUEST_FAILURE:
		case REQUEST_SUCCESS:
			return false;
		case REQUEST_QUESTIONS:
			return true;
		default:
			return state;
	}
}

export default loading;