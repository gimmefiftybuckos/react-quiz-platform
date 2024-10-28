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
   selectedAnswers: string[];
   onChange: (selectedAnswers: string[]) => void;
}

export const CheckboxQuestion: React.FC<CheckboxQuestionProps> = ({
   question,
   selectedAnswers,
   onChange,
}) => {
   const handleCheckboxChange = (answerText: string) => {
      const newSelectedAnswers = [...selectedAnswers];
      if (newSelectedAnswers.includes(answerText)) {
         newSelectedAnswers.splice(newSelectedAnswers.indexOf(answerText), 1);
      } else {
         newSelectedAnswers.push(answerText);
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
                     value={item}
                     checked={selectedAnswers.includes(item)}
                     onChange={() => handleCheckboxChange(item)}
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
