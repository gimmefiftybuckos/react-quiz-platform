import { Box } from '@mui/material';

export const MainSection = () => {
   return (
      <Box
         component='section'
         sx={{
            blockSize: '100%',
            inlineSize: '100%',
            background: '#fff',
            borderInlineEnd: '1px solid lightGray',
         }}
      >
         Test
      </Box>
   );
};
