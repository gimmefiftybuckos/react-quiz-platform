import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import { HomeSection } from './sections/HomeSection/index.tsx';
import { CreateSection } from './sections/CreateSection/index.tsx';
import { QuizSection } from './sections/QuizSection/index.tsx';

import './styles/index.css';

const router = createBrowserRouter([
   {
      path: '/*',
      element: <App />,
      children: [
         {
            element: <HomeSection />,
         },
         {
            path: 'create',
            element: <CreateSection />,
         },
         {
            // path: 'quiz/:id',
            path: 'quiz',
            element: <QuizSection />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
   // <Provider store={store}>
   <RouterProvider router={router} />
   // </Provider>
);
