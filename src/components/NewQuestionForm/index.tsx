import { Box, Button } from '@mui/material';
import { NewQuestionTitle } from '../NewQuestionTitle';
import { NewQuestionType } from '../NewQuestionType';
import { NewQuestionAnswers } from '../NewQuestionAnswers';
import {
   addQuestion,
   addQuize,
   resetQuestion,
   resetQuiz,
   setAnswers,
   setValid,
} from '../../store/slices/quize';
import { useDispatch, useSelector } from '../../store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateQuestion, validateQuiz } from '../../services/utils';

export const NewQuestionForm = () => {
   const { question, quiz } = useSelector((state) => state.quizes);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const addAnswer = () => {
      dispatch(setAnswers([...question.answers, '']));
   };

   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();

      if (validateQuiz(quiz)) {
         dispatch(addQuize());
         navigate('/');
         dispatch(resetQuiz());
      } else {
         console.error('Не все вопросы составлены правильно');
      }
   };

   const onClick = () => {
      dispatch(resetQuestion());
   };

   useEffect(() => {
      dispatch(setValid(validateQuestion(question)));
      dispatch(addQuestion());
      console.log(question);
      console.log(quiz);
   }, [question]);

   return (
      <form
         onSubmit={onSubmit}
         style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
            paddingBlock: '2rem',
            inlineSize: '100%',
            blockSize: '100%',
         }}
      >
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'space-between',
               inlineSize: '100%',
               paddingBlock: 1,
            }}
         >
            <NewQuestionTitle />
            <NewQuestionType />
         </Box>

         <NewQuestionAnswers />
         <Box
            component='div'
            sx={{
               display: 'flex',
               justifyContent: 'space-around',
               inlineSize: '100%',
            }}
         >
            <Button
               sx={{ marginBlock: 4 }}
               variant='outlined'
               onClick={addAnswer}
            >
               Добавить ответ
            </Button>
            <Button
               sx={{ marginBlock: 4 }}
               variant='contained'
               onClick={onClick}
            >
               Новый вопрос
            </Button>
            <Button sx={{ marginBlock: 4 }} variant='contained' type='submit'>
               Сохранить тест
            </Button>
         </Box>
      </form>
   );
};
