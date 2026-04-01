import { useState } from 'react';

export default function CalcolatoreBMI() {
  const [peso, setPeso] = useState('');
  const [altezza, setAltezza] = useState('');
  const [risultato, setRisultato] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const pesoNum = parseFloat(peso);
    const altezzaCm = parseFloat(altezza);
    const altezzaM = altezzaCm / 100;
    
    const bmi = pesoNum / (altezzaM * altezzaM);
    
    let messaggio = 'Il tuo BMI è';
    let classe = '';
    
    if (bmi < 18.5) {
      messaggio = `${bmi.toFixed(1)} - Sei in sottopeso`;
      classe = 'sottopeso';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      messaggio = `${bmi.toFixed(1)} - Sei nella norma`;
      classe = 'normale';
    } else if (bmi >= 25 && bmi <= 29.9) {
      messaggio = `${bmi.toFixed(1)} - Sei in sovrappeso`;
      classe = 'sovrappeso';
    } else {
      messaggio = `${bmi.toFixed(1)} - Sei obeso`;
      classe = 'obeso';
    }
    
    setRisultato({ messaggio, classe });
  };

  return (
    <div className="bmi-container">
      <h1>Calcolatore BMI</h1>
      <p>Inserisci i tuoi dati qui sotto</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="peso">Il tuo peso è (kg):</label>
        <br />
        <input
          type="number"
          id="peso"
          step="0.1"
          required
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <br /><br />

        <label htmlFor="altezza">La tua altezza è (cm):</label>
        <br />
        <input
          type="number"
          id="altezza"
          step="0.1"
          required
          value={altezza}
          onChange={(e) => setAltezza(e.target.value)}
        />
        <br /><br />

        <button type="submit">Calcola</button>
      </form>

      {risultato && (
        <div id="risultato" className={risultato.classe}>
          {risultato.messaggio}
        </div>
        //con questo pezzo di codice, utilizziamo a pieno l'operatore and, dicendo che
        //se risultato è null o undefined non mostra il div, altrimenti si,
        //questo perchè con l'operatore and tutte le soluzioni devono essere vere altrimenti non esegue nulla
      )}
    </div>
  );
}