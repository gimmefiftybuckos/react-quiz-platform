import { Box, IconButton, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from '../../store';
import { setAnswers } from '../../store/slices/quize';

export const NewQuestionAnswers = () => {
   const { newQuestion } = useSelector((state) => state.quizes);
   const dispatch = useDispatch();

   const { answers } = newQuestion;

   const handleAnswerChange = (index: number, value: string) => {
      const newAnswers = [...answers];
      newAnswers[index] = value;
      dispatch(setAnswers(newAnswers));
   };

   const removeAnswer = (index: number) => {
      const newAnswers = answers.filter((_, i) => i !== index);
      dispatch(setAnswers(newAnswers));
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
         }}
      >
         {answers.map((answer, index) => (
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
                  onClick={() => removeAnswer(index)}
               >
                  <ClearIcon />
               </IconButton>
            </Box>
         ))}
      </Box>
   );
};
