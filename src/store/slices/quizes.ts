import { createSlice } from '@reduxjs/toolkit';
import { IQuestion, IQuize, QuestionTypes } from '../../services/types';
import { v4 as uuidv4 } from 'uuid';
import { original } from 'immer';

type TQuizSlice = {
   quiz: IQuize;
   question: IQuestion;
   quizes: IQuize[];
};

const initialState: TQuizSlice = {
   quiz: {
      id: uuidv4(),
      questions: [],
   },
   question: {
      id: 0,
      answers: ['', ''],
      rightAnswers: [],
      problem: '',
      type: QuestionTypes.NONE,
      valid: false,
   },
   quizes: [
      {
         id: '1',
         questions: [
            {
               id: 0,
               answers: ['Paris'],
               rightAnswers: ['Paris'],
               problem: 'What is the capital of France?',
               type: QuestionTypes.INPUT,
               valid: false,
            },
            {
               id: 1,
               answers: ['Dog', 'Cat', 'Elephant', 'Lion'],
               rightAnswers: [1],
               problem: 'Which animal is known as the "King of the Jungle"?',
               type: QuestionTypes.CHECKBOX,
               valid: false,
            },
         ],
      },
      {
         id: '2',
         questions: [
            {
               id: 0,
               answers: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
               rightAnswers: [2],
               problem: 'Which planet is known as the "Red Planet"?',
               type: QuestionTypes.CHECKBOX,
               valid: false,
            },
            {
               id: 1,
               answers: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
               rightAnswers: [0],
               problem: 'What is the highest mountain in the world?',
               type: QuestionTypes.CHECKBOX,
               valid: false,
            },
         ],
      },
   ],
};

const quizes = createSlice({
   name: 'quizes',
   initialState,
   reducers: {
      setType(state, action) {
         state.question.type = action.payload;
      },
      setAnswers(state, action) {
         state.question.answers = action.payload;
      },
      setRightAnswer(state, action) {
         state.question.rightAnswers = action.payload;
      },
      setProblem(state, action) {
         state.question.problem = action.payload;
      },
      setValid(state, action) {
         state.question.valid = action.payload;
      },

      addQuestion(state) {
         const existingQuestionIndex = state.quiz.questions.findIndex(
            (question) => question.id === state.question.id
         );

         if (existingQuestionIndex !== -1) {
            state.quiz.questions[existingQuestionIndex] = state.question;
         } else {
            state.quiz.questions.push(state.question);
         }
      },
      addQuize(state) {
         state.quizes.push(state.quiz);
      },

      setQuestion(state, action) {
         const question = state.quiz.questions.find(
            (item) => item.id === action.payload
         );

         if (question) {
            state.question = question;
         }
      },
      setQuiz(state, action) {
         // const quiz = state.quizes.find((item) => action.payload === item.id);

         const quiz = original(
            state.quizes.find((item) => action.payload === item.id)
         );

         if (quiz) {
            state.quiz = quiz;
         }
      },

      resetQuestion(state) {
         state.question = {
            ...initialState.question,
            id: state.question.id + 1,
         };
      },
      resetQuiz(state) {
         state.quiz = { id: uuidv4(), questions: initialState.quiz.questions };
         state.question = { ...initialState.question, id: 0 };
      },
   },
});

export const {
   addQuestion,
   setAnswers,
   setProblem,
   setRightAnswer,
   setType,
   setValid,
   resetQuestion,
   setQuestion,
   setQuiz,
   addQuize,
   resetQuiz,
} = quizes.actions;

export default quizes.reducer;
