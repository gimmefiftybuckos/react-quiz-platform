import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch } from '../../store';

import { QuizForm } from '../../components/QuizForm';
import { resetQuiz } from '../../store/slices/quizes';

export const QuizSection = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      return () => {
         dispatch(resetQuiz());
      };
   }, []);

   return (
      <Box
         component='section'
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingInline: 8,
            blockSize: '100%',
            inlineSize: '100%',
            background: '#fff',
            borderInlineEnd: '1px solid lightGray',
         }}
      >
         <QuizForm />
      </Box>
   );
};
