import { useEffect } from 'react';
import { Header } from './sections/Header';
import { Main } from './sections/Main';
import { useDispatch, useSelector } from './store';
import { setQuizes } from './store/slices/quizes';

function App() {
   const { quizes } = useSelector((state) => state.quizes);
   const dispatch = useDispatch();

   useEffect(() => {
      const quizesString = localStorage.getItem('quizes');
      if (quizesString) {
         const quizes = JSON.parse(quizesString);

         dispatch(setQuizes(quizes));
      }
   }, []);

   useEffect(() => {
      localStorage.setItem('quizes', JSON.stringify(quizes));
   }, [quizes]);

   return (
      <>
         <Header></Header>
         <Main></Main>
      </>
   );
}

export default App;
