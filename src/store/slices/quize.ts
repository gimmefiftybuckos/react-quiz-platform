import { createSlice } from '@reduxjs/toolkit';
import { IQuestion, IQuize } from '../../services/types';
import { v4 as uuidv4 } from 'uuid';

type TQuizSlice = {
   currentId: string;
   quiz: IQuize;
   question: IQuestion;
   quizes: IQuize[];
};

const initialState: TQuizSlice = {
   currentId: '',
   quiz: {
      id: uuidv4(),
      questions: [],
   },
   question: {
      id: uuidv4(),
      answers: ['', ''],
      rightAnswers: [],
      problem: '',
      type: '',
      valid: false,
   },
   quizes: [],
};

const cardCatalog = createSlice({
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
         const foundedQuestion = state.quiz.questions.find(
            (item) => item.id === action.payload
         );

         if (foundedQuestion) {
            state.question = foundedQuestion;
         }
      },

      resetQuestion(state) {
         state.question = { ...initialState.question, id: uuidv4() };
      },
      resetQuiz(state) {
         state.quiz = { ...initialState.quiz, id: uuidv4() };
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
   addQuize,
   resetQuiz,
} = cardCatalog.actions;

export default cardCatalog.reducer;
