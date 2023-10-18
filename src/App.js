import './App.css';
import Testimonal from './Components/Testimonal';
import reviews from './data';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">

      <div>
        <Testimonal reviews={reviews} />
      </div>

    </div>
  );
}

export default App;
