import React from 'react';
import { FormControl, FormLabel, TextField } from '@mui/material';

interface InputQuestionProps {
   selectedAnswers: string[];
   onChange: (selectedAnswers: string[]) => void;
}

export const InputQuestion: React.FC<InputQuestionProps> = ({
   selectedAnswers,
   onChange,
}) => {
   const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[0] = event.target.value;
      onChange(newSelectedAnswers);
   };

   return (
      <FormControl component='fieldset'>
         <FormLabel component='legend'>Введите ответы</FormLabel>
         <TextField
            label={`Ответ`}
            autoComplete='off'
            value={selectedAnswers[0]}
            onChange={(event) => handleInputChange(event)}
            sx={{ marginBlockStart: 2 }}
         />
      </FormControl>
   );
};
