import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';

import Starships from './components/Starships';

import './App.css';

function App() {
  const [starships, setStarships] = useState(null);

  useEffect(() => {
    const fetchStarships = async () => {
      const fetchedStarships = await getAllStarships();
      console.log(fetchedStarships);

      setStarships(fetchedStarships);
    };
    fetchStarships();
  }, []);

  return (
    <div className='App'>
      <h1>Results</h1>
      {starships && <Starships starships={starships} />}
    </div>
  );
}

export default App;
