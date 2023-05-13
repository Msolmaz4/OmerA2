
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <div >
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
    
    </BrowserRouter>
  
    </div>
  );
}

export default App;
