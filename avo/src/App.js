
import Footer from './Footer';
import Header from './Header';
import CircleImage from './CircleImage';
import StarRating from './StarRating';
import LawyerCard from './LawyerCard';
import avocatImage from './avocat.jpg'; 
import FicheTechnique1 from './Fichetechnique1';
import AvocatFiche from './avocatfiche';
import Userpage1 from './userpage1';
import Userpage2 from './userpage2';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';


function App() {
 
  return (
    
     <Router>
     <div className="App">
      <Header/>
      <div className='content'>
       <Switch>
        <Route exact path="/"><AvocatFiche/></Route>
        <Route path="/userpage1"><Userpage1/></Route>
        <Route path="/userpage2"><Userpage2/></Route>

       </Switch>
     </div>
</div>

    </Router>

      
    
  );
}

export default App;
