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
      alert('Fyll i titel och betyg');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mb-3'>
      <fieldset>
        <legend className='mb-2'>Lägg till en film</legend>
        <div className='mb-3'>
          <label className='form-label'>
            Titel:
            <input
              type='text'
              className='form-control'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className='mb-3'>
          <label className='form-label'>
            Betyg:
            <select
              className='form-select'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value='0'>Välj betyg här...</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </label>
        </div>
        <button type='submit' className='btn btn-success mt-3'>
          Spara film
        </button>
      </fieldset>
    </form>
  );
};
