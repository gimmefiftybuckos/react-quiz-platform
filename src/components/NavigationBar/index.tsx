import { Box, Button } from '@mui/material';

export const NavigationBar = () => {
   return (
      <Box
         component='nav'
         sx={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            paddingInline: '2rem',
            margin: '0 auto',
            maxInlineSize: '80rem',
            height: '100%',
         }}
      >
         <Button variant='outlined'>Все тесты</Button>
         <Button variant='contained'>Создать тест</Button>
      </Box>
   );
};
