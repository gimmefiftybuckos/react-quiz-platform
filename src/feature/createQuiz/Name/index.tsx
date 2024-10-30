import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from '../../../store';

import { setQuizName } from '../../../store/slices/quizes';

export const Name = () => {
   const { quiz } = useSelector((state) => state.quizes);
   const dispatch = useDispatch();

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setQuizName(event.target.value));
   };

   return (
      <Box
         sx={{
            display: 'flex',
            marginBlockStart: 4,
            paddingBlock: 1,
            inlineSize: '100%',
         }}
      >
         <TextField
            id='name'
            autoComplete='off'
            placeholder='Название теста'
            variant='outlined'
            value={quiz.name}
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
