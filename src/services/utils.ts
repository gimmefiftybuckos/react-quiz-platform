import { IQuestion, IQuize } from './types';

export const validateQuestion = (question: IQuestion): boolean => {
   return (
      question.answers.every((answer) => answer !== '') &&
      question.answers.length > 0 &&
      question.rightAnswers.length > 0 &&
      question.problem !== '' &&
      question.type !== ''
   );
};

export const validateQuiz = (quiz: IQuize): boolean => {
   return quiz.questions.every((question) => validateQuestion(question));
};
