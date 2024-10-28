import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from '../../store';
import { setQuiz } from '../../store/slices/quizes';
import { useNavigate } from 'react-router-dom';

export const CatalogSection = () => {
   const { quizes } = useSelector((state) => state.quizes);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onClick = (id: string) => {
      dispatch(setQuiz(id));
      navigate(`/quiz/${id}`);
   };

   return (
      <Box
         component='section'
         sx={{
            paddingInline: 6,
            paddingBlock: 4,
            blockSize: '100%',
            inlineSize: '100%',
            background: '#fff',
            borderInlineEnd: '1px solid lightGray',
         }}
      >
         <Typography component='h1' variant='h5'>
            Все тесты
         </Typography>
         <Box component='ul' sx={{ marginBlockStart: 2 }}>
            {quizes.map((item) => {
               return (
                  <Box component='li' key={item.id}>
                     <Button
                        onClick={() => onClick(item.id)}
                        variant='text'
                        sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'start',
                           inlineSize: '100%',
                           paddingInline: '2rem',
                           borderRadius: '10px',
                           '&:hover': {
                              outline: '1px solid lightgray',
                           },
                        }}
                     >
                        <Typography variant='h5' component='h2'>
                           {item.name}
                        </Typography>
                        <Typography variant='body1' component='p'>
                           Колличество вопросов: {item.questions.length}
                        </Typography>
                     </Button>
                  </Box>
               );
            })}
         </Box>
      </Box>
   );
};
