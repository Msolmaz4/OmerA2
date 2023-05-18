
import { BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import User from './pages/User';
import useToken from './hoo/useToken';
import Navbar from './pages/Navbar';

function App() {


  const [token] = useToken()

  //console.log(token.regToken,'token')



  return (
    <div >
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  
    <BrowserRouter>
    {token?.regToken && <Navbar/>}
    <Routes>
      <Route path="/" element = {!token?.regToken ? <Link to={'/User'}/> :<Home/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
    
    </BrowserRouter>
  
    </div>
  );
}

export default App;
