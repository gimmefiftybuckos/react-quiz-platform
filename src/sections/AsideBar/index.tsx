import { Box, Button, Grid, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from '../../store';
import { setQuestion } from '../../store/slices/quize';
import { validateQuestion } from '../../services/utils';
import { useLocation } from 'react-router-dom';
import { RoutesCatalog } from '../../services/types';

export const AsideBar = () => {
   const { quiz } = useSelector((state) => state.quizes);
   const dispatch = useDispatch();
   const { pathname } = useLocation();

   const onClick = (id: string) => {
      dispatch(setQuestion(id));
   };

   const inCreate = pathname === RoutesCatalog.CREATE;

   return (
      <Box
         component='aside'
         sx={{
            display: 'flex',
            alignItems: 'center',
            maxInlineSize: '25vw',
            minInlineSize: 260,
            blockSize: '100%',
            inlineSize: '100%',
            paddingInline: 2,
            borderInline: '1px solid lightGray',
            background: '#fff',
         }}
      >
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
               {quiz.questions.map((item) => (
                  <Grid key={item.id} item sx={{ padding: 0 }}>
                     <IconButton
                        sx={{
                           blockSize: 40,
                           inlineSize: 30,
                           borderRadius: 1,
                           border: '1px solid lightGray',
                           padding: 0.5,
                        }}
                        onClick={() => onClick(item.id)}
                     >
                        {inCreate &&
                           (validateQuestion(item) ? (
                              <CheckIcon color='success' />
                           ) : (
                              <ClearIcon color='error' />
                           ))}
                     </IconButton>
                  </Grid>
               ))}
            </Grid>
            <Button variant='outlined' sx={{ marginBlockStart: 3 }}>
               Завершить
            </Button>
         </Box>
      </Box>
   );
};
