import { Box, Button } from '@mui/material';
import {
   addQuestion,
   addQuize,
   resetQuestion,
   resetQuiz,
   setAnswers,
} from '../../../store/slices/quizes';
import { useDispatch, useSelector } from '../../../store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateQuiz } from '../../../services/utils';
import { Title } from '../Title';
import { Type } from '../Type';
import { Answers } from '../Answers';

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
         dispatch(resetQuestion());
      } else {
         console.error('Не все вопросы составлены правильно');
      }
   };

   const onClick = () => {
      dispatch(resetQuestion());
   };

   useEffect(() => {
      dispatch(addQuestion());
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
            <Title />
            <Type />
         </Box>

         <Answers />
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
