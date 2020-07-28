import React from 'react';
import {useSelector} from 'react-redux';
import Edit from './edit/Edit';
import Error from './error/Error';
import Header from './structure/Header';
import Loading from './loading/Loading';
import Question from './question/Question';

const App = () => {
	const editQuestion = useSelector(store => store.edit);
	const error = useSelector(store => store.error);
	const loading = useSelector(store => store.loading);

	const isEditQuestion = (editQuestion) ? (<Edit question={editQuestion} />) : null;
	const isError = (error) ? <Error error={error} /> : null;
	const isLoading = (loading) ? <Loading /> : null;

	return (
		<>
			<Header />
			<main>
				<Question />
				{isEditQuestion}
				{isLoading}
				{isError}
			</main>
		</>
	);
}

export default App;