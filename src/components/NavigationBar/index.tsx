import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export const NavigationBar = () => {
   const navigate = useNavigate();

   return (
      <Box
         component='nav'
         sx={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            paddingInline: '2rem',
            margin: '0 auto',
            maxInlineSize: '85rem',
            height: '100%',
         }}
      >
         <Button onClick={() => navigate('/')} variant='outlined'>
            Все тесты
         </Button>
         <Button onClick={() => navigate('/create')} variant='contained'>
            Создать тест
         </Button>
      </Box>
   );
};
