import { Box, IconButton, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

import { useDispatch, useSelector } from '../../store';
import { setAnswers, setRightAnswer } from '../../store/slices/quize';

export const NewQuestionAnswers = () => {
   const { question } = useSelector((state) => state.quizes);
   const dispatch = useDispatch();

   const { answers, rightAnswers } = question;

   const handleAnswerChange = (index: number, value: string) => {
      const newAnswers = [...answers];
      newAnswers[index] = value;
      dispatch(setAnswers(newAnswers));
   };

   const removeAnswer = (index: number) => {
      const newAnswers = answers.filter((_, i) => i !== index);
      dispatch(setAnswers(newAnswers));
   };

   const setRightAnswers = (index: number) => {
      const newRightAnswers = rightAnswers.includes(index)
         ? rightAnswers.filter((item) => item !== index)
         : [...rightAnswers, index];

      dispatch(setRightAnswer(newRightAnswers));
   };

   return (
      <Box
         component='ul'
         sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            marginBlockStart: 1,
            paddingBlock: 1,
            inlineSize: '100%',
            maxBlockSize: '100%',
            overflow: 'auto',
         }}
      >
         {answers.map((answer, index) => {
            const isRight = rightAnswers.includes(index);

            return (
               <Box
                  key={index}
                  component='li'
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: 1,
                  }}
               >
                  <TextField
                     key={index}
                     value={answer}
                     onChange={(e) => handleAnswerChange(index, e.target.value)}
                     label={`Ответ ${index + 1}`}
                     sx={{ inlineSize: '100%' }}
                  />
                  <IconButton
                     sx={{ padding: 0, blockSize: 40, inlineSize: 40 }}
                     onClick={() => removeAnswer(index)}
                  >
                     <ClearIcon />
                  </IconButton>
                  <IconButton
                     sx={{ padding: 0, blockSize: 40, inlineSize: 40 }}
                     onClick={() => setRightAnswers(index)}
                  >
                     {isRight ? <CheckIcon color='success' /> : <AddIcon />}
                  </IconButton>
               </Box>
            );
         })}
      </Box>
   );
};
