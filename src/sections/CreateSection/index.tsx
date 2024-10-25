import { Box } from '@mui/material';
import { NewQuestionForm } from '../../components/NewQuestionForm';

export const CreateSection = () => {
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
