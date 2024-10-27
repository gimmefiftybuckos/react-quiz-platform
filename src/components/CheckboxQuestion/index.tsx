import React from 'react';
import {
   FormControl,
   FormControlLabel,
   FormLabel,
   Checkbox,
   Box,
   Typography,
} from '@mui/material';

interface CheckboxQuestionProps {
   question: {
      answers: string[];
   };
   selectedAnswers: number[];
   onChange: (selectedAnswers: number[]) => void;
}

const CheckboxQuestion: React.FC<CheckboxQuestionProps> = ({
   question,
   selectedAnswers,
   onChange,
}) => {
   const handleCheckboxChange = (index: number) => {
      const newSelectedAnswers = [...selectedAnswers];
      if (newSelectedAnswers.includes(index)) {
         newSelectedAnswers.splice(newSelectedAnswers.indexOf(index), 1);
      } else {
         newSelectedAnswers.push(index);
      }
      onChange(newSelectedAnswers);
   };

   return (
      <FormControl component='fieldset'>
         <FormLabel component='legend'>
            Выберите несколько вариантов ответа
         </FormLabel>
         {question.answers.map((item, index) => (
            <FormControlLabel
               key={index}
               control={
                  <Checkbox
                     checked={selectedAnswers.includes(index)}
                     onChange={() => handleCheckboxChange(index)}
                  />
               }
               label={
                  <Box sx={{ display: 'flex', gap: 1 }}>
                     <Typography component='p'>
                        {String.fromCharCode(97 + index)}.
                     </Typography>
                     <Typography component='p'>{item}</Typography>
                  </Box>
               }
            />
         ))}
      </FormControl>
   );
};

export default CheckboxQuestion;
