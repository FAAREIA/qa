interface IRequestQuestions {
	category: string,
	correct_answer: string | string[],
	difficulty: string,
	incorrect_answers: string | string[],
	question: string,
	type: string
}

export default IRequestQuestions;