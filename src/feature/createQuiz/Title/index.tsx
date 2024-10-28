import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from '../../../store';
import { setProblem } from '../../../store/slices/quizes';

export const Title = () => {
   const { question } = useSelector((state) => state.quizes);
   const dispatch = useDispatch();

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setProblem(event.target.value));
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
            placeholder='Напишите вопрос'
            multiline
            value={question.problem}
            onChange={onChange}
            sx={{
               inlineSize: '100%',
               maxBlockSize: 'calc(55vh - 70px)',
               overflow: 'auto',
            }}
         />
      </Box>
   );
};
