import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../store';
import { Box, Button, Grid, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import { RoutesCatalog } from '../../services/types';
import { setQuestionIndex, setValid } from '../../store/slices/quizes';
import { validateQuestion } from '../../services/utils';

import { Name } from '../../feature/createQuiz/Name';

export const AsideBar = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const { quiz } = useSelector((state) => state.quizes);

   const handleChoose = (id: number) => {
      dispatch(setQuestionIndex(id));
   };

   const handleEndQuiz = () => {
      quiz.questions.forEach((_, index) => {
         dispatch(
            setValid({ quizId: quiz.id, questionId: index, status: false })
         );
      });
      navigate(RoutesCatalog.HOME);
   };

   const inCreate = pathname === RoutesCatalog.CREATE;
   const inQuiz = pathname.includes(RoutesCatalog.QUIZ.split('/')[1]);

   return (
      <Box
         component='aside'
         sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxInlineSize: '25vw',
            minInlineSize: 260,
            blockSize: '100%',
            inlineSize: '100%',
            paddingInline: 2,
            overflow: 'auto',
            borderInline: '1px solid lightGray',
            background: '#fff',
         }}
      >
         {quiz.questions.length !== 0 && (
            <Box
               component='div'
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '0 auto',
                  padding: 4.5,
                  maxInlineSize: '18vw',
                  minInlineSize: 220,
                  borderRadius: 2,
                  border: '1px solid lightGray',
               }}
            >
               <Grid
                  sx={{
                     boxSizing: 'border-box',
                  }}
                  container
                  spacing={1}
               >
                  {quiz.questions.map((item) => {
                     return (
                        <Grid key={item.id} item sx={{ padding: 0 }}>
                           <IconButton
                              sx={{
                                 blockSize: 40,
                                 inlineSize: 30,
                                 borderRadius: 1,
                                 border: '1px solid lightGray',
                                 padding: 0.5,
                              }}
                              onClick={() => handleChoose(item.id)}
                           >
                              {inCreate &&
                                 (validateQuestion(item) ? (
                                    <CheckIcon color='success' />
                                 ) : (
                                    <ClearIcon color='error' />
                                 ))}
                              {inQuiz &&
                                 ((item.valid && (
                                    <CheckIcon color='success' />
                                 )) ||
                                    (item.valid === false && (
                                       <ClearIcon color='error' />
                                    )))}
                           </IconButton>
                        </Grid>
                     );
                  })}
               </Grid>

               {inQuiz && (
                  <Button
                     onClick={handleEndQuiz}
                     variant='outlined'
                     sx={{ marginBlockStart: 3 }}
                  >
                     Завершить
                  </Button>
               )}
            </Box>
         )}

         {inCreate && (
            <Box
               sx={{
                  minInlineSize: 220,
                  maxInlineSize: '18vw',
               }}
            >
               <Name />
               {/* <Time /> */}
            </Box>
         )}
      </Box>
   );
};
