import { useState } from 'react';
import StarRating from './components/StarRating';

function CustomStar() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={5} color = 'red' size = {30} className = ''  messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]} defaultRating = {0} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <StarRating />
        <CustomStar />
      </div>
    </>
  );
}

export default App;
