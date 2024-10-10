import { useState } from 'react';
import StarRating from './components/StarRating';
import ToDoList from './components/ToDoList';
import StateProjects from './components/StateProjects';

function CustomStar() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={5}
        color="red"
        size={30}
        className=""
        messages={['Terrible', 'Bad', 'Okay', 'Good', 'Excellent']}
        defaultRating={0}
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

function App() {
  return (
    <>
      <div id="starRating">
        <StarRating />
        <CustomStar />
      </div>
      <div id="todoList">
        <ToDoList />
      </div>
      <div id="stateProject">
        <StateProjects />
      </div>
    </>
  );
}

export default App;
