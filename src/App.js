import photo from './asserts/profile.png';
import '../src/css/App.css'
import Details from './components/details';
import Button from './components/button';
import About from './components/about';
import Social from './components/social';

function App() {
  return (
    <div className='container'>
      <div className="card">
      <div className="content">
        <img src={photo}/>
        <Details />
        <Button />
        <About />
        <Social />
      </div>
    </div>
      
    </div>
  );
}

export default App;
