import { Box, Button, Typography } from '@mui/material';
import QuestionControl from '../QuestionControl';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../store';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
   setQuestion,
   setQuestionIndex,
   setQuiz,
   setValid,
} from '../../store/slices/quizes';
import { checkAnswer } from '../../services/utils';

export const QuizForm = () => {
   const dispatch = useDispatch();
   const { pathname } = useLocation();
   const [params, setParams] = useSearchParams();
   const { quiz, question, questionIndex } = useSelector(
      (state) => state.quizes
   );
   const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

   const quizId = pathname.split('/')[2];
   const questionIndexParam = params.get('question');

   useEffect(() => {
      if (questionIndexParam) {
         dispatch(setQuestionIndex(parseInt(questionIndexParam)));
      }
      dispatch(setQuiz(quizId));

      return () => {
         dispatch(setQuestionIndex(0));
      };
   }, []);

   useEffect(() => {
      setSelectedAnswers([]);
      dispatch(setQuestion(questionIndex));
   }, [questionIndex]);

   useEffect(() => {
      setParams({ question: question.id.toString() });
   }, [question]);

   const handleControlChange = (answers: string[]) => {
      setSelectedAnswers(answers);
   };

   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();

      dispatch(setQuestionIndex(questionIndex + 1));
      dispatch(
         setValid({
            quizId,
            questionId: questionIndex,
            status: checkAnswer(question, selectedAnswers),
         })
      );
   };

   return (
      <Box component='div'>
         <Typography variant='h5' component='h1'>
            {quiz.name}
         </Typography>
         <Typography variant='h6' component='h2' sx={{ marginBlockStart: 3 }}>
            Вопрос № {question.id + 1} из {quiz.questions.length}
         </Typography>
         <Typography sx={{ marginBlockStart: 1 }}>
            {question.problem}
         </Typography>
         <form onSubmit={onSubmit}>
            <QuestionControl
               type={question.type}
               selectedAnswers={selectedAnswers}
               onChange={handleControlChange}
            />
            <Button
               variant='outlined'
               type='submit'
               sx={{ marginBlockStart: 3 }}
            >
               Ответить
            </Button>
         </form>
      </Box>
   );
};
