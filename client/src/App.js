
import { BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import User from './components/User';
import useToken from './hoo/useToken';
import Navbar from './pages/Navbar';
import Modal from './components/Modal'
import { useSelector } from 'react-redux';

function App() {


  const [token] = useToken()
  const {modal} = useSelector(state=>state.modal)

 // console.log(token.regToken,'token')



  return (
    <div >
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  
    <BrowserRouter>
    {token?.token && <Navbar/>}
   { modal && <Modal/>}
    <Routes>
      <Route path="/" element = {!token?.regToken ? <Link to={'/User'}/> :<Home/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
    
    </BrowserRouter>
  
    </div>
  );
}

export default App;
