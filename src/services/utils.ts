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

export const checkAnswer = (
   question: IQuestion,
   answers: string[] | number[]
) => {
   if (answers.length === 0) {
      return false;
   }

   for (let i = 0; i < answers.length; i++) {
      if (answers[i] !== question.rightAnswers[i]) {
         return false;
      }
   }

   return true;
};
