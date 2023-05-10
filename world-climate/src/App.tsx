import Card from './components/Card/Card';
import { useState } from 'react';
import fecthData from './services/Api/Api';
import initialData from './helpers/initialData';

function App() {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState<any>(initialData);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    fecthData(city).then((response) => {
      if (!response.error?.code) {
        setData(response);
        setError('');
      } else {
        setError('Cidade não encontrada!');
        setData({});
      }
    });
  };

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center '>
      <img src='./logo.png' alt='World Climate' />
      <form className='mt-8' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Pesquisar cidade...'
          className='p-3 rounded-lg outiline-none  max-[425px]:h-10 max-[425px]:w-40'
          onChange={(e) => setCity(e.target.value)}
          value={city}
          required
          minLength={3}
          pattern='[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ, ]+$'
        />
        <button
          type='submit'
          className='bg-[#258a60] p-3 ml-3 rounded-lg text-white font-bold  max-[425px]:text-sm max-[425px]:h-10'
        >
          Pesquisar...
        </button>
      </form>
      <Card data={data} error={error} />
    </div>
  );
}

export default App;
