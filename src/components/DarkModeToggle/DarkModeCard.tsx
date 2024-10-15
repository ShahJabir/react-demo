import ThemeBtn from './ThemeBtn';
import Card from './Card';
import { ThemeProvider } from '../../contexts/Theme';
import { useEffect, useState } from 'react';

const DarkModeCard = () => {
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
      <div>
        <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
          <ThemeBtn />
          <Card />
        </ThemeProvider>
      </div>
    </>
  );
};

export default DarkModeCard;
