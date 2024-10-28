import React from 'react';
import {
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   Box,
   Typography,
} from '@mui/material';

interface RadioQuestionProps {
   question: {
      answers: string[];
   };
   selectedAnswers: string[];
   onChange: (selectedAnswers: string[]) => void;
}

export const RadioQuestion: React.FC<RadioQuestionProps> = ({
   question,
   selectedAnswers,
   onChange,
}) => {
   const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedText = event.target.value;
      onChange([selectedText]);
   };

   return (
      <FormControl component='fieldset'>
         <FormLabel component='legend'>Выберите один вариант ответа</FormLabel>
         <RadioGroup
            value={selectedAnswers[0] || ''}
            onChange={handleRadioChange}
         >
            {question.answers.map((item, index) => (
               <FormControlLabel
                  key={index}
                  value={item}
                  control={<Radio />}
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
         </RadioGroup>
      </FormControl>
   );
};
