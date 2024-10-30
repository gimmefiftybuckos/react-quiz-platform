import { useState } from 'react';
import { Box, Checkbox, TextField } from '@mui/material';
import { useDispatch, useSelector } from '../../../store';

import { setQuizTime } from '../../../store/slices/quizes';

export const Time = () => {
   const dispatch = useDispatch();
   const { quiz } = useSelector((state) => state.quizes);

   const [isChecked, setIsChecked] = useState(false);

   const handleCheckboxChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      const isChecked = event.target.checked;

      setIsChecked(isChecked);
      if (!isChecked) {
         dispatch(setQuizTime(''));
      }
   };

   const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setQuizTime(event.target.value));
   };

   return (
      <Box
         component='div'
         sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            marginBlockStart: 2,
            blockSize: '3.5rem',
            inlineSize: '100%',
         }}
      >
         <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            sx={{ inlineSize: 24, blockSize: 24 }}
         />
         {isChecked && (
            <TextField
               id='time'
               label='Введите время'
               type='time'
               value={quiz.time}
               onChange={handleTimeChange}
               InputLabelProps={{
                  shrink: true,
               }}
               inputProps={{
                  step: 300,
                  style: { textAlign: 'center' },
               }}
               sx={{ width: '100%' }}
            />
         )}
      </Box>
   );
};
