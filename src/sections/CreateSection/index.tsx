import { Box } from '@mui/material';
import { NewQuestionForm } from '../../components/NewQuestionForm';
import { useEffect } from 'react';
import { useDispatch } from '../../store';
import { resetQuestion, resetQuiz } from '../../store/slices/quizes';

export const CreateSection = () => {
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
            paddingInline: 6,
            inlineSize: '100%',
            blockSize: '100%',
            background: '#fff',
            borderInlineEnd: '1px solid lightGray',
         }}
      >
         <NewQuestionForm />
      </Box>
   );
};
