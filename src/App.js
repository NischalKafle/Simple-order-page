import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Flavour from './components/flavour';
import Type from './components/type';
import Header from './components/header';
import Order from './components/order';
import Thankyou from './components/thankyou';
function App() {
  return (
   <>
<Header/>
   <Routes>
   <Route path='/' element={
    <Home/>
   }>
   </Route>
   <Route path='/flavour' element={
    <Flavour/>
   }>
   </Route>
   <Route path="/type" element={
    <Type/>
   }></Route>
   <Route path="/order" element={
    <Order/>
   }>
   </Route>
   <Route path='/thankyou' element={
    <Thankyou/>
   }></Route>
   </Routes>
</>  
  );
}

export default App;
