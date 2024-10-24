import { Box, Button, Grid, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export const AsideBar = () => {
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
               {new Array(25).fill(0).map((_, index) => (
                  <Grid key={index} item sx={{ padding: 0 }}>
                     <IconButton
                        sx={{
                           blockSize: 40,
                           inlineSize: 30,
                           borderRadius: 1,
                           border: '1px solid lightGray',
                           padding: 0.5,
                        }}
                     >
                        {/* <CheckIcon /> */}
                        {/* <ClearIcon /> */}
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
