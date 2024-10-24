import {
   Box,
   Button,
   Checkbox,
   FormControl,
   FormControlLabel,
   FormLabel,
   Typography,
} from '@mui/material';

export const QuizForm = () => {
   return (
      <form
         onSubmit={() => {
            console.log('test');
         }}
      >
         <FormControl
            component='fieldset'
            sx={{
               display: 'flex',
               gap: 1,
               marginBlockStart: 1,
               maxBlockSize: '60vh',
               overflow: 'auto',
            }}
         >
            <FormLabel
               sx={{
                  marginBlock: 2,
                  color: 'text.primary',
                  '&.Mui-focused': {
                     color: 'text.primary',
                  },
               }}
               component='legend'
            >
               Выберите вариант ответа
            </FormLabel>
            {new Array(7).fill(0).map((_, index) => (
               <FormControlLabel
                  key={index}
                  sx={{
                     display: 'flex',
                     gap: 1,
                     alignItems: 'start',
                     margin: 0,
                  }}
                  control={
                     <Checkbox
                        sx={{ padding: 0 }}
                        value={`option${index + 1}`}
                     />
                  }
                  label={
                     <Box sx={{ display: 'flex', gap: 1 }}>
                        <Typography component='p'>
                           {String.fromCharCode(97 + index)}.
                        </Typography>
                        <Typography component='p'>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. In voluptatibus fuga soluta quis, sunt iure!
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. In voluptatibus fuga soluta quis, sunt iure!
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. In voluptatibus fuga soluta quis, sunt iure!
                        </Typography>
                     </Box>
                  }
               />
            ))}
         </FormControl>
         <Button variant='outlined' type='submit' sx={{ marginBlockStart: 3 }}>
            Следующий
         </Button>
      </form>
   );
};
