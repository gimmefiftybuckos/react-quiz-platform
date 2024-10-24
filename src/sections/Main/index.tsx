import { Box } from '@mui/material';
import { AsideBar } from '../AsideBar';
import { QuizSection } from '../QuizSection';
import { Route, Routes } from 'react-router-dom';
import { CreateSection } from '../CreateSection';
import { CatalogSection } from '../CatalogSection';

export const Main = () => {
   return (
      <Box
         component='main'
         sx={{
            display: 'flex',
            margin: '0 auto',
            paddingInline: '2rem',
            maxInlineSize: '85rem',
            blockSize: 'calc(100vh - 70px)',
         }}
      >
         <AsideBar />
         <Routes>
            <Route path='/' element={<CreateSection />} />
            <Route path='/quiz/:id' element={<QuizSection />} />
            <Route path='/create' element={<CreateSection />} />

            {/* <Route path="*" element={<NotFound />} /> */}
         </Routes>
         {/* <QuizSection /> */}
      </Box>
   );
};
