import { useState } from 'react';

const BgChanger = () => {
  const [color, setColor] = useState('yellow');
  return (
    <>
      <div
        className="w-full h-screen duraton-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'yellow' }}
              onClick={() => setColor('yellow')}
            >
              {' '}
              Defalut{' '}
            </button>
            <button
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'red' }}
              onClick={() => setColor('red')}
            >
              {' '}
              Red{' '}
            </button>
            <button
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'green' }}
              onClick={() => setColor('green')}
            >
              {' '}
              Green{' '}
            </button>
            <button
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'blue' }}
              onClick={() => setColor('blue')}
            >
              {' '}
              Blue{' '}
            </button>
            <button
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'black' }}
              onClick={() => setColor('black')}
            >
              {' '}
              Black{' '}
            </button>
            <button
              className="outline-none px-4 rounded-full text-white shadow-lg dark:bg-white bg-white"
              style={{ backgroundColor: 'white' }}
              onClick={() => setColor('white')}
            >
              {' '}
              White{' '}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BgChanger;
