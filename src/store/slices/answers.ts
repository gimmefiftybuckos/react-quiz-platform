import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TAnswersSlice = {
   answers: {
      quizId: string;
      answers: (string[] | number[])[];
   };
   allAnswers: {
      [quizId: string]: (string[] | number[])[];
   };
};

const initialState: TAnswersSlice = {
   answers: {
      quizId: '',
      answers: [],
   },
   allAnswers: {},
};

const answersSlice = createSlice({
   name: 'answers',
   initialState,
   reducers: {
      setQuizId(state, action: PayloadAction<string>) {
         state.answers.quizId = action.payload;
      },
      addAnswer(
         state,
         action: PayloadAction<{ index: number; answer: string[] | number[] }>
      ) {
         const { index, answer } = action.payload;
         if (index >= 0 && index < state.answers.answers.length) {
            state.answers.answers[index] = answer;
         } else {
            state.answers.answers.push(answer);
         }
      },
      saveAllAnswers(state) {
         state.allAnswers[state.answers.quizId] = state.answers.answers;
         state.answers = {
            quizId: '',
            answers: [],
         };
      },
   },
});

export const { setQuizId, addAnswer, saveAllAnswers } = answersSlice.actions;

export default answersSlice.reducer;
