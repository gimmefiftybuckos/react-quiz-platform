import { Box, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

import { NewQuestionForm } from '../../components/NewQusetionForm';

export const CreateSection = () => {
   const [answers, setAnswers] = useState<string[]>(['', '']);
   const [questionType, setQuestionType] = useState<string>('');

   return (
      <Box
         component='section'
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingInline: 6,
            inlineSize: '100%',
            background: '#fff',
            borderInlineEnd: '1px solid lightGray',
            overflow: 'auto',
         }}
      >
         <NewQuestionForm />
      </Box>
   );
};
