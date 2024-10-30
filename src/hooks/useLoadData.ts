import { useEffect } from 'react';
import { useDispatch } from '../store';

import { setQuizes } from '../store/slices/quizes';

export const useLoadData = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      const quizesString = localStorage.getItem('quizes');
      if (quizesString) {
         const quizes = JSON.parse(quizesString);
         dispatch(setQuizes(quizes));
      }
   }, []);
};
