interface IQuestion {
	category: string,
	correct_answer: string[],
	difficulty: string,
	id: number,
	incorrect_answer: string[],
	question: string
}

export default IQuestion;