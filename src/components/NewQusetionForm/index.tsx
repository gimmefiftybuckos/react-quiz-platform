import { Box, Button } from '@mui/material';
import { NewQuestionTitle } from '../NewQuestionTitle';
import { NewQuestionType } from '../NewQuestionType';
import { NewQuestionAnswers } from '../NewQuestionAnswers';
import { setAnswers } from '../../store/slices/quize';
import { useDispatch, useSelector } from '../../store';
import { useEffect } from 'react';

export const NewQuestionForm = () => {
   const { newQuestion } = useSelector((state) => state.quizes);
   const dispatch = useDispatch();

   const addAnswer = () => {
      dispatch(setAnswers([...newQuestion.answers, '']));
   };

   useEffect(() => {
      console.log(newQuestion);
   }, [newQuestion]);

   return (
      <form
         style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
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
         <Button sx={{ marginBlock: 4 }} variant='outlined' onClick={addAnswer}>
            Добавить ответ
         </Button>
      </form>
   );
};
