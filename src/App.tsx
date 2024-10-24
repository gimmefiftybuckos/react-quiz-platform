import { Header } from './sections/Header';
import { Main } from './sections/Main';

function App() {
   return (
      <>
         <Header></Header>
         <Main></Main>
         {/* <Box
            component='main'
            //  sx={{ blockSize: 'calc(100vh - 70px)', background: '#000' }}
         >
            <Box component='aside' sx={{ blockSize: '100%' }}>
               Test
            </Box>
            <Box component='section' sx={{ blockSize: '100%' }}>
               Test
            </Box>
         </Box> */}
      </>
   );
}

export default App;
