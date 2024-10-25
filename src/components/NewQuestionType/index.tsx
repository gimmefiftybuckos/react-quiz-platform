import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   SelectChangeEvent,
} from '@mui/material';
import { useDispatch, useSelector } from '../../store';
import { setType } from '../../store/slices/quize';
import { QuestionTypes } from '../../services/types';

export const NewQuestionType = () => {
   const { question } = useSelector((state) => state.quizes);
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
            value={question.type}
            label='Тип вопроса'
            onChange={handleTypeChange}
         >
            <MenuItem value=''>None</MenuItem>
            <MenuItem value={QuestionTypes.RADIO}>
               Выбор одного варианта
            </MenuItem>
            <MenuItem value={QuestionTypes.CHECKBOX}>
               Выбор нескольких вариантов
            </MenuItem>
            <MenuItem value={QuestionTypes.INPUT}>Короткий ответ</MenuItem>
            <MenuItem value={QuestionTypes.TEXTFIELD}>
               Развернутый ответ
            </MenuItem>
         </Select>
      </FormControl>
   );
};
