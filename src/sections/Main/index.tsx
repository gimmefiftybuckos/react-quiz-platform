import { Box } from '@mui/material';
import { AsideBar } from '../AsideBar';
import { MainSection } from '../MainSection';

export const Main = () => {
   return (
      <Box
         component='main'
         sx={{
            display: 'flex',
            margin: '0 auto',
            paddingInline: '2rem',
            maxInlineSize: '80rem',
            blockSize: 'calc(100vh - 70px)',
         }}
      >
         <AsideBar />
         <MainSection />
      </Box>
   );
};
