import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion, IQuize, QuestionTypes } from '../../services/types';
import { v4 as uuidv4 } from 'uuid';

type TQuizSlice = {
   quiz: IQuize;
   question: IQuestion;
   questionIndex: number;
   quizes: IQuize[];
};

const initialState: TQuizSlice = {
   quiz: {
      id: uuidv4(),
      name: '',
      questions: [],
   },
   question: {
      id: 0,
      answers: ['', ''],
      rightAnswers: [],
      problem: '',
      type: QuestionTypes.NONE,
      valid: null,
   },
   questionIndex: 0,
   quizes: [
      {
         id: '1',
         name: 'Test #1',
         questions: [
            {
               id: 0,
               answers: ['Paris'],
               rightAnswers: ['Paris'],
               problem: 'What is the capital of France?',
               type: QuestionTypes.INPUT,
               valid: null,
            },
            {
               id: 1,
               answers: ['Dog', 'Cat', 'Elephant', 'Lion'],
               rightAnswers: ['Cat'],
               problem: 'Which animal is known as the "King of the Jungle"?',
               type: QuestionTypes.CHECKBOX,
               valid: null,
            },
            {
               id: 2,
               answers: ['Dog', 'Cat', 'Elephant', 'Lion'],
               rightAnswers: ['Cat'],
               problem: 'Which animal is known as the "King of the Jungle"?',
               type: QuestionTypes.CHECKBOX,
               valid: null,
            },
         ],
      },
      {
         id: '2',
         name: 'Test #2',
         questions: [
            {
               id: 0,
               answers: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
               rightAnswers: ['Jupiter'],
               problem: 'Which planet is known as the "Red Planet"?',
               type: QuestionTypes.CHECKBOX,
               valid: null,
            },
            {
               id: 1,
               answers: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
               rightAnswers: ['Mount Everest', 'K2'],
               problem: 'What is two the highest mountain in the world?',
               type: QuestionTypes.CHECKBOX,
               valid: null,
            },
         ],
      },
   ],
};

const quizes = createSlice({
   name: 'quizes',
   initialState,
   reducers: {
      setQuestionIndex(state, action) {
         state.questionIndex = action.payload;
      },
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

      setValid(
         state,
         action: PayloadAction<{
            quizId: string;
            questionId: number;
            status: boolean;
         }>
      ) {
         const { quizId, questionId, status } = action.payload;

         const quizIndex = state.quizes.findIndex((quiz) => quiz.id === quizId);
         if (quizIndex < 0) {
            return;
         }

         const questionIndex = state.quiz.questions.findIndex(
            (question) => question.id === questionId
         );
         if (questionIndex < 0) {
            return;
         }

         if (
            typeof state.quizes[quizIndex].questions[questionIndex].valid !==
            'boolean'
         ) {
            state.quiz.questions[questionIndex].valid = status;
            state.quizes[quizIndex].questions[questionIndex].valid = status;
         }
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
      setQuizName(state, action) {
         state.quiz.name = action.payload;
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
         const quiz = state.quizes.find((item) => action.payload === item.id);

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
         state.quiz = {
            id: uuidv4(),
            name: '',
            questions: [],
         };
         state.question = { ...initialState.question, id: 0 };
      },

      setQuizes(state, action: PayloadAction<IQuize[]>) {
         state.quizes = action.payload;
      },
   },
});

export const {
   setQuizName,
   setQuestionIndex,
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
   setQuizes,
} = quizes.actions;

export default quizes.reducer;
