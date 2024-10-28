import React from 'react';
import { FormControl } from '@mui/material';
import { useSelector } from '../../store';
import { QuestionTypes } from '../../services/types';
import { CheckboxQuestion } from '../CheckboxQuestion';
import { RadioQuestion } from '../RadioQuestion';
import { InputQuestion } from '../InputQuestion';

interface QuestionControlProps {
   type: QuestionTypes;
   selectedAnswers: string[];
   onChange: (selectedAnswers: string[]) => void;
}

const QuestionControl: React.FC<QuestionControlProps> = ({
   type,
   selectedAnswers,
   onChange,
}) => {
   const { question } = useSelector((state) => state.quizes);

   const handleChange = (newSelectedAnswers: string[]) => {
      onChange(newSelectedAnswers);
   };

   const renderControl = () => {
      switch (type) {
         case 'checkbox':
            return (
               <CheckboxQuestion
                  question={question}
                  selectedAnswers={selectedAnswers}
                  onChange={handleChange}
               />
            );
         case 'radio':
            return (
               <RadioQuestion
                  question={question}
                  selectedAnswers={selectedAnswers}
                  onChange={handleChange}
               />
            );
         case 'input':
            return (
               <InputQuestion
                  selectedAnswers={selectedAnswers}
                  onChange={handleChange}
               />
            );
         default:
            return null;
      }
   };

   return (
      <FormControl
         component='fieldset'
         sx={{
            display: 'flex',
            gap: 1,
            marginBlockStart: 1,
         }}
      >
         {renderControl()}
      </FormControl>
   );
};

export default QuestionControl;
