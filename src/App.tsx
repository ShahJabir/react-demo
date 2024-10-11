import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/Theme';
import StarRating from './components/StarRating';
import ToDoList from './components/ToDoList';
import StateProjects from './components/StateProjects';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    const htmlDOM = document.querySelector('html');
    htmlDOM?.classList.remove('light', 'dark');
    htmlDOM?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <ThemeBtn />
        <Card />
      </ThemeProvider>

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

export default App;
