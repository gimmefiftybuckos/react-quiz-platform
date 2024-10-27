import { Box, Button, Typography } from '@mui/material';
import QuestionControl from '../QuestionControl';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../store';
import { useLocation, useSearchParams } from 'react-router-dom';
import { setQuestion, setQuiz } from '../../store/slices/quizes';

export const QuizForm = () => {
   const dispatch = useDispatch();
   const { pathname } = useLocation();
   const [params, setParams] = useSearchParams();
   const { quiz, question } = useSelector((state) => state.quizes);
   const [questionIndex, setQuestionIndex] = useState(0);
   const [selectedAnswers, setSelectedAnswers] = useState<number[] | string[]>(
      []
   );

   const quizId = pathname.split('/')[2];
   const questionIndexParam = params.get('question');

   useEffect(() => {
      if (questionIndexParam) {
         setQuestionIndex(+questionIndexParam);
      }
      dispatch(setQuiz(quizId));
   }, []);

   useEffect(() => {
      dispatch(setQuestion(questionIndex));
   }, [questionIndex]);

   useEffect(() => {
      setParams({ question: question.id.toString() });
   }, [question]);

   const handleControlChange = (answers: number[] | string[]) => {
      setSelectedAnswers(answers);
   };

   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();

      setQuestionIndex((prev) => prev + 1);
   };

   useEffect(() => {
      console.log(selectedAnswers);
   }, [selectedAnswers]);

   return (
      <Box component='div'>
         <Typography variant='h5' component='h1'>
            {quiz.id}
         </Typography>
         <Typography variant='h6' component='h2' sx={{ marginBlockStart: 3 }}>
            Вопрос № {question.id + 1}
         </Typography>
         <Typography sx={{ marginBlockStart: 1 }}>
            {question.problem}
         </Typography>
         <form onSubmit={onSubmit}>
            <QuestionControl
               type={question.type}
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
