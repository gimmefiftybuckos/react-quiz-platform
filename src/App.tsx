import { useEffect } from 'react';
import { useSelector } from './store';

import { useLoadData } from './hooks/useLoadData';

import { Header } from './sections/Header';
import { Main } from './sections/Main';

function App() {
   const { quizes } = useSelector((state) => state.quizes);

   useLoadData();

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
