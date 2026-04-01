import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password, remember });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="form-container">
          <h1 className="title">
            Benvenuto in <span className="custom-green">iMed</span>
          </h1>
          <p className="subtitle">
            Inserisci le tue credenziali per accedere
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                e-Mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Inserisci il tuo indirizzo e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Inserisci la tua password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input password-input"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="password-toggle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="eye-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="options-container">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="checkbox"
                />
                <label htmlFor="remember" className="checkbox-label">
                  Ricorda i miei dati
                </label>
              </div>
              <a href="#" className="forgot-password">
                Password dimenticata?
              </a>
            </div>

            <button type="submit" className="submit-button">
              Accedi
            </button>
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
            <img src="/textlogo.svg" alt="iMed logo" className="center-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}