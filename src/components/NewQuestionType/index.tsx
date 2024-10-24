import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   SelectChangeEvent,
} from '@mui/material';
import { useDispatch, useSelector } from '../../store';
import { setType } from '../../store/slices/quize';

export const NewQuestionType = () => {
   const { newQuestion } = useSelector((state) => state.quizes);
   const dispatch = useDispatch();

   const handleTypeChange = (event: SelectChangeEvent<string>) => {
      dispatch(setType(event.target.value));
   };

   return (
      <FormControl sx={{ maxInlineSize: 280, inlineSize: '100%' }}>
         <InputLabel id='question-type-label'>Тип вопроса</InputLabel>
         <Select
            labelId='question-type-label'
            id='question-type'
            value={newQuestion.type}
            label='Тип вопроса'
            onChange={handleTypeChange}
         >
            <MenuItem value=''>None</MenuItem>
            <MenuItem value='radio'>Выбор одного варианта</MenuItem>
            <MenuItem value='checkbox'>Выбор нескольких вариантов</MenuItem>
            <MenuItem value='input'>Короткий ответ</MenuItem>
            <MenuItem value='textfield'>Развернутый ответ</MenuItem>
         </Select>
      </FormControl>
   );
};
