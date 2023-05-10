const Card = ({ data, error }: any) => {
  const { location, current } = data;
  const { errors } = error;
  return (
    <div className='bg-[#cce7dc] p-6 mt-10 rounded-lg drop-shadow-2xl min-w-[300px]'>
      {error ? <p className="flex text-center justify-center mt-5 text-green-900 text-bold  text-xl">Cidade não encontrada!</p> : (<div className='text-center'>
        <span className='block text-xl font-bold text-slate-700'>
          {location?.name}
        </span>
        <span className='text-slate-600 text-sm font-medium'>{`${location?.region}, ${location?.country}`}</span>
      </div>)}
      {current?.wind_kph > 0 && current?.humidity > 0 && (
        <div className='text-center flex flex-col justify-center'>
          <span className='text-slate-500 text-sm font-medium'>
            Vento: {Math.round(current?.wind_kph)} km/h
          </span>
          <span className='text-slate-500 text-sm font-medium'>
            Umidade: {current?.humidity}%
          </span>
        </div>
      )}
      <div className='font-bold text-slate-700 flex justify-center mt-3 mb-2'>
        <span className='text-8xl'>{current?.temp_c}</span>
        <span className='text-2xl mt-3'>
         {current && <span className='text-slate-800'>ºC </span>}
        </span>
      </div>
      <div className='text-center flex flex-col justify-center'>
        <img className='block' src={current?.condition.icon} />
        <span className='text-slate-800 font-medium'>
          {current?.condition.text}
        </span>
      </div>
    </div>
  );
};

export default Card;
