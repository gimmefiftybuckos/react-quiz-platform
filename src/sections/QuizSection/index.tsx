import { Box, Typography } from '@mui/material';
import { QuizForm } from '../../components/QuizForm';

export const QuizSection = () => {
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
         <Box component='div'>
            <Typography variant='h5' component='h1'>
               Заголовок
            </Typography>
            <Typography
               variant='h6'
               component='h2'
               sx={{ marginBlockStart: 3 }}
            >
               Вопрос № 1
            </Typography>
            <Typography sx={{ marginBlockStart: 1 }}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Voluptate, saepe dolor architecto autem in nulla!
            </Typography>
            <QuizForm />
         </Box>
      </Box>
   );
};
