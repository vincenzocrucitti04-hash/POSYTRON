import { useState, useRef } from 'react';

export default function TwoFactorAuth() {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleInput = (index, value) => {
    if (value.length > 1) {
      value = value.charAt(0);
    }

    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value.length >= 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = codes.join('');
    console.log('Codice inserito:', fullCode);
  };

  const handleResend = (e) => {
    e.preventDefault();
    console.log('Reinvia codice');
  };

  return (
    <div className="main-container">
      <div className="left-section">
        <div className="form-container">
          <h1 className="title">Autenticazione a due fattori</h1>
          <p className="subtitle">
            Il codice di verifica è stato inviato al tuo indirizzo e-mail.
          </p>
          <p className="subtitle-last">
            Inseriscilo sotto per accedere ad iMed.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                Inserisci il codice di verifica
              </label>

              <div className="code-inputs-container">
                {codes.map((code, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={code}
                    onChange={(e) => handleInput(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="code-input"
                  />
                ))}
              </div>
            </div>

            <button type="submit" className="submit-button">
              Accedi
            </button>

            <p className="resend-text">
              Codice non ricevuto o scaduto?{' '}
              <a href="#" onClick={handleResend} className="resend-link">
                Invia di nuovo
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="right-section">
        <div className="logo-top-right">
          <img src="/movibel.svg" alt="movibel" />
        </div>

        <div className="background-container">
          <img
            src="/backgroundtext.png"
            alt="background"
            className="background-image"
          />

          <div className="center-logo-container">
            <img 
              src='/textlogo.svg' 
              alt="iMed logo" 
              className="center-logo" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}