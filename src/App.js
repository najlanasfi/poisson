
import React from 'react';
import './App.css';
import {useState} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import List from './Components/List';
import Navigation from './Components/Navigation';
import Detail from './Components/Detail';
import Footer from './Components/Footer';
function App() {
  
 const[selectRating,setSelectRating] = useState(0);
 const [searchCondition, setSearchCondition]=useState('');
  return (
    
    <BrowserRouter>
 <Navigation setSearchCondition={setSearchCondition} 
        setSelectRating={setSelectRating} />
    <div className="App" style={{padding:"50px",backgroundColor:""}}>
<List/>
<Switch>
  <Route path='/poisson/:id'><Detail  /></Route>
</Switch>
      </div>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
