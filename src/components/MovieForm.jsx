import { useState } from 'react';

export const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('0');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && rating !== '0') {
      addMovie({ title, rating });
      setTitle('');
      setRating('0');
    } else {
      alert('Enter title and select rating');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Lägg till en film</legend>
        <label>
          Titel:
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Betyg:
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value='0'>Välj betyg här...</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </label>
        <button type='submit'>Spara film</button>
      </fieldset>
    </form>
  );
};
