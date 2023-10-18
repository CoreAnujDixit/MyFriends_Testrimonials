import './App.css';
import Testimonal from './Components/Testimonal';
import reviews from './data';

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
