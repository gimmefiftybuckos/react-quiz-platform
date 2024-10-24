import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from '../../store';
import { setQuestion } from '../../store/slices/quize';

export const NewQuestionTitle = () => {
   const { newQuestion } = useSelector((state) => state.quizes);
   const dispatch = useDispatch();

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setQuestion(event.target.value));
   };

   return (
      <Box
         sx={{
            display: 'flex',
            maxInlineSize: '50%',
            inlineSize: '100%',
         }}
      >
         <TextField
            id='outlined-textarea'
            label='Вопрос'
            placeholder='Напишите вопрос'
            multiline
            value={newQuestion.question}
            onChange={onChange}
            sx={{
               inlineSize: '100%',
               maxBlockSize: '30vh',
               overflow: 'auto',
            }}
         />
      </Box>
   );
};
