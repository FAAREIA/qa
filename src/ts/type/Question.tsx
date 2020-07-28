import IQuestion from '../interface/Question';
import IRequestQuestions from '../interface/RequestQuestions';

type TQuestion = IQuestion | IQuestion[] | IRequestQuestions | IRequestQuestions[];

export default TQuestion;