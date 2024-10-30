import { Box } from '@mui/material';

import { NavigationBar } from '../../components/NavigationBar';

export const Header = () => {
   return (
      <Box
         component='header'
         bgcolor='#f3f3f3'
         height={70}
         sx={{
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 4px 5px rgba(0, 0, 0, 0.1)',
         }}
      >
         <NavigationBar />
      </Box>
   );
};
