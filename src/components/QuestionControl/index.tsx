import React, { useState } from 'react';
import { FormControl } from '@mui/material';
import { useSelector } from '../../store';
import CheckboxQuestion from '../CheckboxQuestion';
import RadioQuestion from '../RadioQuestion';
import InputQuestion from '../InputQuestion';
import { QuestionTypes } from '../../services/types';

interface QuestionControlProps {
   type: QuestionTypes;
   onChange: (selectedAnswers: number[] | string[]) => void;
}

const QuestionControl: React.FC<QuestionControlProps> = ({
   type,
   onChange,
}) => {
   const { question } = useSelector((state) => state.quizes);
   const [selectedAnswers, setSelectedAnswers] = useState<number[] | string[]>(
      []
   );

   const handleChange = (newSelectedAnswers: number[] | string[]) => {
      setSelectedAnswers(newSelectedAnswers);
      onChange(newSelectedAnswers);
   };

   const renderControl = () => {
      switch (type) {
         case 'checkbox':
            return (
               <CheckboxQuestion
                  question={question}
                  selectedAnswers={selectedAnswers as number[]}
                  onChange={handleChange}
               />
            );
         case 'radio':
            return (
               <RadioQuestion
                  question={question}
                  selectedAnswers={selectedAnswers as number[]}
                  onChange={handleChange}
               />
            );
         case 'input':
            return (
               <InputQuestion
                  selectedAnswers={selectedAnswers as string[]}
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
