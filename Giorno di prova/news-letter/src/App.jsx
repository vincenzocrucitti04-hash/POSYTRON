import { useState } from 'react';

export default function NewsLetter() {
  const [email, setEmail] = useState('');
  const [errore, setErrore] = useState(false);
  const [successo, setSuccesso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailTrimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    setErrore(false);
    setSuccesso(false);
    
    if (!emailRegex.test(emailTrimmed)) {
      setErrore(true);
    } else {
      setSuccesso(true);
      setEmail('');
    }
  };

  return (
    <main>
      <h1>Iscrizione alla NewsLetter</h1>
      <p>Inserisci qui la tua email</p>

      <form id="newsletterForm" onSubmit={handleSubmit}>
        <label htmlFor="email">e-Mail</label>
        <input
          placeholder="Inserisci qui la tua e-Mail"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errore ? 'input-errore' : ''}
        />
        {errore && (
          <div className="messaggio-errore">
            Inserisci un'email valida (es: example@domain.com)
          </div>
        )}
        
        <button type="submit">Iscriviti</button>
      </form>

      {successo && (
        <div className="messaggio-successo">
          Iscrizione avvenuta con successo! Grazie per esserti iscritto alla nostra newsletter.
        </div>
      )}
    </main>
  );
}