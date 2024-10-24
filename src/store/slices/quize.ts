import { createSlice } from '@reduxjs/toolkit';

type TQuestion = {
   answers: string[];
   rightAnswers: string | number[];
   question: string;
   type: string;
   time?: number;
};

type TQuize = TQuestion[];

type TQuizSlice = {
   newQuiz: TQuize;
   newQuestion: TQuestion;
   quizes: TQuize[];
};

const initialState: TQuizSlice = {
   newQuiz: [],
   newQuestion: {
      answers: ['', ''],
      rightAnswers: [],
      question: '',
      type: '',
   },
   quizes: [],
};

const cardCatalog = createSlice({
   name: 'cards',
   initialState,
   reducers: {
      setType(state, action) {
         state.newQuestion.type = action.payload;
      },
      setAnswers(state, action) {
         state.newQuestion.answers = action.payload;
      },
      setRightAnswer(state, action) {
         state.newQuestion.rightAnswers = action.payload;
      },
      setQuestion(state, action) {
         state.newQuestion.question = action.payload;
      },
      addQuestion(state) {
         state.newQuiz.push(state.newQuestion);
         state.newQuestion = initialState.newQuestion;
      },
   },
});

export const { addQuestion, setAnswers, setQuestion, setRightAnswer, setType } =
   cardCatalog.actions;

export default cardCatalog.reducer;
