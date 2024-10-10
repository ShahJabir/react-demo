import { useState } from 'react';
import './StateProjects.css';

const message = ['Learn Cybersecurity', 'Hack Nasa', 'Do Fun'];
const StateProjects = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previousCount() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }

  function nextCount() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }

  function getIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <button className="close" onClick={getIsOpen}>
        x
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">
            Step {step} : {message[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ background: '#7950f2', color: '#fff' }}
              onClick={previousCount}
            >
              Previous
            </button>
            <button
              style={{ background: '#7950f2', color: '#fff' }}
              onClick={nextCount}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StateProjects;
