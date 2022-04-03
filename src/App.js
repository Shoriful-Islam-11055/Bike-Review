import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dasboard from './Components/Dasboard/Dasboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/review' element = {<Review></Review>}></Route>
        <Route path='/dasboard' element = {<Dasboard></Dasboard>}></Route>
        <Route path='/blogs' element = {<Blogs></Blogs>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
